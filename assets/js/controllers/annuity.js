var Annuity = angular.module('Annuity', ['calculations']);

Annuity.controller('AnnuityController', ['$scope', function ($scope) {
	$scope.setActive('annuity');
	$scope.currentCalculator = $scope.calculators['annuity'];
	$scope.currentForm =  $scope.partialsDir + 'form-' + $scope.currentCalculator.handle + '.html'
}]);


