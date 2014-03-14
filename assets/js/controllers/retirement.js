var Retirement = angular.module('Retirement', ['calculations']);

Retirement.controller('RetirementController', function ($scope, $filter, FinancialService, MathService) {
	$scope.setActive('retirement');
	$scope.currentCalculator = $scope.calculators['retirement'];
	$scope.currentForm =  $scope.partialsDir + 'form-' + $scope.currentCalculator.handle + '.html'
	
	$scope.labels = {
		'principal': 'Current Principal',
		'years': 'Years to Retirement',
		'ratePercent': 'Growth Rate',
		'result': 'Annual Retirement Income'
	}

	$scope.vars = {
		'principal': '',
		'annualAddition': '',
		'years': '',
		'ratePercent': '',
		'yearsToPayout': '',
		'ratePercentRetirement': ''
	}
	
	$scope.calculate = function calculate() {
		var out = 0; 
				
		alert("principal: " + $scope.vars.principal +
				"\nannualAddition: " + $scope.vars.annualAddition +
				"\nYears to retirement: " + $scope.vars.years + 
				"\nrate pre-retirement: " + $scope.vars.ratePercent +
				"\nYears to Payout: " + $scope.vars.yearsToPayout +
				"\nrateInRetirement: " + $scope.vars.ratePercentRetirement);
				
		var fsi = FinancialService.investment($scope.vars.principal,
											  $scope.vars.ratePercent,
										 	  $scope.vars.years,
										 	  $scope.vars.annualAddition);
						 
		out = FinancialService.calculateAnnuity(fsi, 
									$scope.vars.ratePercentRetirement,
									$scope.vars.yearsToPayout);
									
		$scope.vars.result = '$ ' + out;
	}
	
});


