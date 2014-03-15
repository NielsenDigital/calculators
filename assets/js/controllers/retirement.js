var Retirement = angular.module('Retirement', ['calculations']);

Retirement.controller('RetirementController', function ($scope, $filter, FinancialService, MathService) {
	$scope.setActive('retirement');
	$scope.currentCalculator = $scope.calculators['retirement'];
	$scope.currentForm =  $scope.partialsDir + 'form-' + $scope.currentCalculator.handle + '.html'
	
	$scope.labels = {
		'principal': 'Current Principal',
		'years': 'Years to Retirement',
		'ratePercent': 'Growth Rate',
		'annualAddition': 'Annual Addition',
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
		var years = 0
		if($scope.vars.years > 0)
		{
			years = MathService.numberFormatter($scope.vars.years);
		}
/*			
		alert("1. principal: " + $scope.vars.principal +
				"\n2. annualAddition: " + $scope.vars.annualAddition +
				"\n3. Years to retirement: " + $scope.vars.years + 
				"\n4. rate pre-retirement: " + $scope.vars.ratePercent +
				"\n5. Years to Payout: " + $scope.vars.yearsToPayout +
				"\n6. rateInRetirement: " + $scope.vars.ratePercentRetirement);
*/				
		// function investment(principal, ratePercent, years, contribution)
		var fsi = FinancialService.investment($scope.vars.principal,
											  $scope.vars.ratePercent,
										 	  years,
										 	  $scope.vars.annualAddition);
 
		out = FinancialService.calculateAnnuity(fsi, 
									$scope.vars.ratePercentRetirement,
									$scope.vars.yearsToPayout);
									
		$scope.vars.result = $filter('currency')(out);
	}
	
});


