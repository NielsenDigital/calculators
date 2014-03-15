var CompoundInterest = angular.module('CompoundInterest', ['calculations']);

CompoundInterest.controller('CompoundInterestController', function ($scope, $filter, FinancialService, MathService) {
	$scope.setActive('compoundInterest');
	$scope.currentCalculator = $scope.calculators['compoundInterest'];
	
	$scope.currentForm =  $scope.partialsDir + 'form-' + $scope.currentCalculator.handle + '.html'

	$scope.labels = {
		'principal': 'Current Principal',
		'years': 'Years to Grow',
		'ratePercent': 'Growth Rate',
		'annualAddition': 'Annual Addition',
		'result': 'Future Value',
		'timing': 'Make Additions at the',
		'timingStart': 'Beginning of each compounding interval',
		'timingEnd': 'Close of each compounding interval'
	}

	$scope.vars = {
		'principal': '',
		'annualAddition': '',
		'years': '',
		'ratePercent': '',
		'compoundFrequency': '',
		'yearsToPayout': ''
	}
	
	$scope.calculate = function calculate() {
		var out = 0; 
		var compoundFrequency = 1;
		if($scope.vars.compoundFrequency > 0)
		{
			compoundFrequency = $scope.vars.compoundFrequency;
		}
		
/*				
		alert("principal: " + $scope.vars.principal +
				"\nannualAddition: " + $scope.vars.annualAddition +
				"\nYears to retirement: " + $scope.vars.years + 
				"\nrate pre-retirement: " + $scope.vars.ratePercent +
				"\nYears to Payout: " + $scope.vars.yearsToPayout +
				"\nrateInRetirement: " + $scope.vars.ratePercentRetirement);
*/
		var compoundContribution = $scope.vars.annualAddition / compoundFrequency;
		var compoundYears = $scope.vars.years * compoundFrequency;
		var compoundRate = $scope.vars.ratePercent / compoundFrequency;
		
		out = FinancialService.investment($scope.vars.principal, compoundRate, 
											compoundYears, compoundContribution);

		$scope.vars.result = $filter('currency')(out);
	}
});

