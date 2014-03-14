/**
* module('name-of-module', [dependencies])
*/
angular.module('calculator', ['ngRoute', 'calculations'])
	.config(calculatorRouter);

function calculatorRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: '/assets/partials/formBase.html',
			controller: 'ReturnRateCtrl'})

		.when('/annuity', {templateUrl: '/assets/partials/formBase.html',
			controller: 'AnnuityCtrl'})
		
		.when('/retirement', {templateUrl: '/assets/partials/formBase.html',
			controller: 'RetirementCtrl'})

		.when('/compound-interest', {templateUrl: '/assets/partials/formBase.html',
			controller: 'CompoundInterestCtrl'});
}
