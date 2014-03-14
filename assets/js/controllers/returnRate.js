var ReturnRate = angular.module('ReturnRate', ['calculations']);

ReturnRate.controller('ReturnRateController', function ($scope, $filter, FinancialService, MathService) {
	
		$scope.setActive('returnRate');
		$scope.currentCalculator = $scope.calculators['returnRate'];
	
		$scope.currentForm =  $scope.partialsDir + 'form-' + $scope.currentCalculator.handle + '.html'
	
		$scope.labels = {
			'years': 'Years',
			'ratePercent': 'Growth Rate',
			'result': 'Return Rate'
		}

		$scope.vars = {
			'presentValue': '',
			'futureValue': '',
			'years': ''
		}
		
		$scope.calculate = function calculate() {
			$scope.vars.result = $filter('number')(100 * FinancialService.returnRate($scope.vars.presentValue,$scope.vars.futureValue,$scope.vars.years), 2) + ' %';
		}
		
	});