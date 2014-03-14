function ReturnRateCtrl($scope) {
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
		'years': 0,
		'result': futureValue.result(vars.presentValue, .05, vars.years)
	}
	
	

}