var Retirement = angular.module('Retirement', ['calculations']);

Retirement.controller('RetirementController', ['$scope', function ($scope) {
	$scope.setActive('retirement');
	$scope.currentCalculator = $scope.calculators['retirement'];
	$scope.currentForm =  $scope.partialsDir + 'form-' + $scope.currentCalculator.handle + '.html'
}]);


