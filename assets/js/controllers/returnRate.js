var ReturnRate = angular.module('ReturnRate', ['calculations']);

ReturnRate.controller('ReturnRateController', ['$scope', function ($scope) {
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
	}]);