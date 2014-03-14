/**
* module('name-of-module', [dependencies])
*/
angular.module('calculator', ['ngRoute', 'calculations', 'calculatorData', 
				'ReturnRate', 'Annuity', 'CompoundInterest', 'Retirement'])
	.config(calculatorRouter);

function calculatorRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: '/assets/partials/formBase.html',
			controller: 'ReturnRateController'})

		.when('/annuity', {templateUrl: '/assets/partials/formBase.html',
			controller: 'AnnuityController'})
		
		.when('/retirement', {templateUrl: '/assets/partials/formBase.html',
			controller: 'RetirementController'})

		.when('/compound-interest', {templateUrl: '/assets/partials/formBase.html',
			controller: 'CompoundInterestController'});
}