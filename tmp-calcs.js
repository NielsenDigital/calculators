function futureValue(principal, ratePercent, years) {
	return principal * Math.pow(1 + ratePercent, years);
}


function calculateAnnuity(principal, ratePercent, years) {
	return futureValue(principal, ratePercent, years - 1) / geometricSeries(ratePercent + 1, 0, years - 1);
}

// still need to translate this into my own mind
function geometricSeries(num, m, exp) {
	var amount;

	// 
	if (num == 1.0) amount = exp + 1;
	// (num^[exp+1]) -1 ÷ (num - 1) 
	else amount = (Math.pow(num, exp + 1) - 1) / (num - 1);

	// ()
	if (m >= 1) amount -= geometricSeries(num, 0, m - 1);
	
	return amount;
}

function investment(principal, ratePercent, years, contribution) {
	// if blank treat contribution as 0
	if (contribution == null) contribution = 0;

	return futureValue(principal, ratePercent, years) + contribution * geometricSeries(1 + r, 1, y);
}
function returnRate(currentValue, futureValue, years) {
	return Math.pow(futureValue / currentValue, 1.0 / years) - 1.0;
}