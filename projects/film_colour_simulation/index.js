let k = 1

let colour_histories = []

while (k--) {
	let { colour_history, direction_change_history } = simulate_film_colours({
		// gradient_variance: 0.04,
		// hue_lower_limit: 0,
		// hue_upper_limit: 360,
		// saturation_mean: 0.15,
		// gradient_magnitude: 0.1,
		// lightness_mean: 0.35,
		// lightness_deviation: 0.1,
		// lightness_saturation_correlation: 0.5,
	})
	colour_histories.push(colour_history)

	if (!k) {
		drawTimeline(colour_history)
		drawChart(colour_history, direction_change_history)
	}
}

// let horror = {
// 	gradient_variance: 0.04,
// 	saturation_mean: 0.25,
// 	lightness_mean: 0.15,
// 	lightness_deviation: 0.1,
// 	lightness_saturation_correlation: 0.5,
// }

// let comedy = {
// 	gradient_variance: 0.03,
// 	saturation_mean: 0.13,
// 	lightness_mean: 0.384,
// 	lightness_variance: 0.05,
// 	lightness_saturation_correlation: 0.3,
// }
