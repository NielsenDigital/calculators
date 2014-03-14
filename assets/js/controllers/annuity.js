function AnnuityCtrl($scope) {
	$scope.setActive('annuity');
	$scope.currentCalculator = $scope.calculators['annuity'];
	$scope.currentForm =  $scope.partialsDir + 'form-' + $scope.currentCalculator.handle + '.html'
}