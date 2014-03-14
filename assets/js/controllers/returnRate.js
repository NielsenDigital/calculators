var ReturnRate = angular.module('ReturnRate', ['calculations']);

ReturnRate.controller('ReturnRateController', function ($scope, $filter, FinancialService, MathService) {
	
		$scope.setActive('returnRate');
		$scope.currentCalculator = $scope.calculators['returnRate'];
	
		$scope.currentForm =  $scope.partialsDir + 'form-' + $scope.currentCalculator.handle + '.html'
	
		$scope.labels = {
			'years': 'Years',
			'ratePercent': 'Growth Rate'
		}

		$scope.vars = {
			'presentValue': 0,
			'futureValue': 0,
			'years': 0
		}
		
		$scope.calculate = function calculate() {
			$scope.vars.result = $filter('number')(100 * FinancialService.returnRate($scope.vars.presentValue,$scope.vars.futureValue,$scope.vars.years), 2) + ' %';
		}
		
	});