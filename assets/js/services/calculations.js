var calc = angular.module('calculations', []);
calc.service('FinancialService', function() {
	this.futureValue = function futureValue(principal, ratePercent, years) {
		return principal * Math.pow(1 + ratePercent, years);
	}
	this.returnRate = function returnRate(currentValue, futureValue, years) {
		return Math.pow(futureValue / currentValue, 1.0 / years) - 1.0;
	}
});
calc.service('MathService', function(){
	this.add = function add(a,b)
	{
		return a + b;
	}
});

