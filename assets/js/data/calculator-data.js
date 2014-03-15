var calculatorData = angular.module('calculatorData', []);

calculatorData.controller('calculatorDataController', ['$scope', function($scope, $routeParams){
	$scope.partialsDir = '/assets/partials/';
	$scope.footerUrl = $scope.partialsDir + 'footer.html';
	$scope.formBaseUrl = $scope.partialsDir + 'formBase.html';
	// form fields
	$scope.formFieldsDir = $scope.partialsDir + 'form-fields/';
	
	
	$scope.fields = {
		'principal': $scope.formFieldsDir + 'principal.html',
		'ratePercent': $scope.formFieldsDir + 'rate-percent.html',
		'years': $scope.formFieldsDir + 'years.html',
		'annualAddition': $scope.formFieldsDir + 'annual-addition.html',
		'timing': $scope.formFieldsDir + 'timing.html',
		'calculateResults': $scope.formFieldsDir + 'calculate-results.html'
	};

	$scope.setActive = function(type) {
		$scope.returnRateActive = '';
		$scope.annuityActive = '';
		$scope.retirementActive = '';
		$scope.compoundInterestActive = '';

		$scope[type + 'Active'] = 'active';
	};

	$scope.calculators = {
		"returnRate": {
			"handle": "return-rate",
			"name": "Return Rate",
			"description": "Figures the compound annual growth rate."
		},
		"annuity": {
			"handle": "annuity",
			"name": "Annuity",
			"description": "Figures the annual payout over a period of years."
		},
		"retirement": {
			"handle": "retirement",
			"name": "Retirement",
			"description": "Figures the annual retirement income over time accounting for " +
								"pre-retirement contributions."
		},
		"compoundInterest": {
			"handle": "compound-interest",
			"name": "Compound Interest",
			"description": "Figures future value accounting for compound interest."
		}
	};
}])
