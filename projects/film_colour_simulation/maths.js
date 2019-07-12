function random(from = 1, to = 0) {
	if (from > to)
		[from, to] = [to, from]
	return from + (to - from) * Math.random()
}

// working with normal distribution:
var erfc = function(x) {
	var z = Math.abs(x);
	var t = 1 / (1 + z / 2);
	var r = t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 +
		t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 +
			t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 +
				t * (-0.82215223 + t * 0.17087277)))))))))
	return x >= 0 ? r : 2 - r;
};

// Inverse complementary error function
// From Numerical Recipes 3e p265
var ierfc = function(x) {
	if (x >= 2) {
		return -100;
	}
	if (x <= 0) {
		return 100;
	}

	var xx = (x < 1) ? x : 2 - x;
	var t = Math.sqrt(-2 * Math.log(xx / 2));

	var r = -0.70711 * ((2.30753 + t * 0.27061) /
		(1 + t * (0.99229 + t * 0.04481)) - t);

	for (var j = 0; j < 2; j++) {
		var err = erfc(r) - xx;
		r += err / (1.12837916709551257 * Math.exp(-(r * r)) - r * err);
	}

	return (x < 1) ? r : -r;
};

// Models the normal distribution
var Gaussian = function(mean, variance) {
	if (variance <= 0) {
		throw new Error('Variance must be > 0 (but was ' + variance + ')');
	}
	this.mean = mean;
	this.variance = variance;
	this.standardDeviation = Math.sqrt(variance);
}

// Probability density function
Gaussian.prototype.pdf = function(x) {
	var m = this.standardDeviation * Math.sqrt(2 * Math.PI);
	var e = Math.exp(-Math.pow(x - this.mean, 2) / (2 * this.variance));
	return e / m;
};

// Cumulative density function
Gaussian.prototype.cdf = function(x) {
	return 0.5 * erfc(-(x - this.mean) / (this.standardDeviation * Math.sqrt(2)));
};

// Percent point function
Gaussian.prototype.ppf = function(x) {
	return this.mean - this.standardDeviation * Math.sqrt(2) * ierfc(2 * x);
};

var gaussian = function(mean, variance) {
	return new Gaussian(mean, variance);
};

var fromPrecisionMean = function(precision, precisionmean) {
	return gaussian(precisionmean / precision, 1 / precision);
};
