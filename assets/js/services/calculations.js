var calc = angular.module('calculations', []);
calc.service('FinancialService', function() {
	
	// Future Value
	this.futureValue = function futureValue(principal, ratePercent, years) {
		return principal * Math.pow(1 + ratePercent, years);
	}
	
	// Return Rate
	this.returnRate = function returnRate(currentValue, futureValue, years) {
		return Math.pow(futureValue / currentValue, 1.0 / years) - 1.0;
	}
	
	// Geometric Series
	this.geometricSeries = function geometricSeries(num, m, exp) {
		var amount;

		// 
		if (num == 1.0) amount = exp + 1;
		// (num^[exp+1]) -1 ÷ (num - 1) 
		else amount = (Math.pow(num, exp + 1) - 1) / (num - 1);

		// ()
		if (m >= 1) amount -= geometricSeries(num, 0, m - 1);
	
		return amount;
	}
	
	// Annuity
	this.calculateAnnuity = function calculateAnnuity(principal, ratePercent, years) {
		return futureValue(principal, ratePercent, years - 1) / geometricSeries(ratePercent + 1, 0, years - 1);
	}
	

});
calc.service('MathService', function(){
	this.add = function add(a,b)
	{
		return a + b;
	}
});

