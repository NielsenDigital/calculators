angular.module('calculations', [])
	.factory('futureValue', function() {
		
		var result = function futureValue(principal, ratePercent, years){
			return principal * Math.pow(1 + ratePercent, years);
		}
		
		return {
			'result': result
		}
		
	});