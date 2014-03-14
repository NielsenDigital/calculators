var CompoundInterest = angular.module('CompoundInterest', ['calculations']);

Annuity.controller('CompoundInterestController', ['$scope', function ($scope) {
	$scope.setActive('compoundInterest');
	$scope.currentCalculator = $scope.calculators['compoundInterest'];
	
	$scope.currentForm =  $scope.partialsDir + 'form-' + $scope.currentCalculator.handle + '.html'

	$scope.labels = {
		'principal': 'Current Principal',
		'ratePercent': 'Interest Rate',
		'years': 'Years to Grow'
		
	}
}]);

