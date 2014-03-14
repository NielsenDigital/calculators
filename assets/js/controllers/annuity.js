var Annuity = angular.module('Annuity', ['calculations']);

Annuity.controller('AnnuityController', function ($scope, $filter, FinancialService, MathService) {
	$scope.setActive('annuity');
	$scope.currentCalculator = $scope.calculators['annuity'];
	$scope.currentForm =  $scope.partialsDir + 'form-' + $scope.currentCalculator.handle + '.html'
	
	$scope.labels = {
		'principal': 'Current Principal',
		'years': 'Years',
		'ratePercent': 'Growth Rate',
		'result': 'Annual Payout'
	}

	$scope.vars = {
		'principal': '',
		'ratePercent': '',
		'years': '',
		'payoutTiming': 'start'
	}
	
	$scope.calculate = function calculate() {
		var out = 0; 
				
		out = FinancialService.calculateAnnuity($scope.vars.principal,$scope.vars.ratePercent,$scope.vars.years);
			
		if($scope.vars.payoutTiming === 'end')
		{
			out *= (1 + $scope.vars.ratePercent);
		}
			
		$scope.vars.result = '$ ' + $filter('number')(out,2);
	}
	
});


