function simulate_film_colours({
	// model parameters
	gradient_variance = 0.025,
	gradient_magnitude = 0.1,
	hue_lower_limit = 0,
	hue_upper_limit = 360,
	saturation_mean = 0.22,
	lightness_mean = 0.1,
	lightness_variance = 0.1,
	lightness_saturation_correlation = 0.5,
}) {
	// model state
	const state = {
		colour: {
			hue: (hue_lower_limit + hue_upper_limit + (hue_lower_limit > hue_upper_limit && 360)) / 2 % 360,
			saturation: saturation_mean,
			lightness: lightness_mean,
		},
		steps_since_direction_change: Infinity,
		saturation_gradient: 0,
		independent_lightness: lightness_mean,
	}

	// probability distributions
	let gradient_distribution = gaussian(0, gradient_variance)
	let lightness_distribution = gaussian(0, lightness_variance / 1000)

	// measurements not used by the model itself
	let colour_history = []
	let direction_change_history = []
	let i = 0

	function direction_step() {
		// compute direction change probability
		let direction_change_probability = state.steps_since_direction_change / 200 +
											Math.abs(saturation_mean - state.colour.saturation)
		if (state.colour.saturation < 0.05)
			direction_change_probability += 1 - state.colour.saturation

		// attempt direction change
		if (direction_change_probability > random()) {
			// compute new saturation_gradient
			let saturation_gradient = (gradient_distribution.ppf(random()) + saturation_mean - state.colour.saturation) * 0.3

			// reset steps_since_direction_change if change is significant
			if (Math.abs(saturation_gradient - state.saturation_gradient) > 0.2) {
				direction_change_history.push(i)
				state.steps_since_direction_change = 0
			}

			// update saturation_gradient
			state.saturation_gradient = saturation_gradient
		} else {
			state.steps_since_direction_change++
		}
	}

	function hue_step() {
		let hue_change = 0

		// attempt major hue change and otherwise attempt minor change
		if (random() < (state.steps_since_direction_change === 0 ? 0.99 : 0.01)) {
			hue_change = 30
		} else if (random() < 0.5) {
			hue_change = 2
		}

		// safely change hue
		if (hue_change) {
			let hue
			if (random() < 0.5) {
				hue = (state.colour.hue + hue_change) % 360
			} else {
				hue = (state.colour.hue - hue_change + 360) % 360
			}
			if (hue >= hue_upper_limit && hue_upper_limit >= state.colour.hue) {
				hue = state.colour.hue
			}
			if (hue <= hue_lower_limit && hue_lower_limit <= state.colour.hue) {
				hue = state.colour.hue
			}
			state.colour.hue = Math.abs(hue)
		}
	}

	function saturation_step() {
		// compute saturation_change
		let saturation_change = gradient_magnitude * (Math.sin(state.saturation_gradient) + random(-0.1, 0.1))

		// update saturation
		state.colour.saturation = Math.min(1, Math.max(0, state.colour.saturation + saturation_change))
	}

	function lightness_step() {
		// compute change in independent lightness
		let independent_lightness_change = lightness_distribution.ppf(random())

		// change independent lightness
		state.independent_lightness = Math.min(1, Math.max(0, state.independent_lightness + independent_lightness_change))

		// computer dependent lightness
		let dependent_lightness = lightness_mean + saturation_mean - state.colour.saturation

		// set lightness to weighted average of the above using lightness_saturation_correlation parameter
		state.colour.lightness = dependent_lightness * lightness_saturation_correlation +
									state.independent_lightness * (1 - lightness_saturation_correlation)
	}

	// simulate
	while (i++ < 1000) {
		// track for results
		colour_history.push([state.colour.hue, state.colour.saturation, state.colour.lightness])

		// all rules every step
		direction_step()
		hue_step()
		saturation_step()
		lightness_step()
	}

	return { colour_history, direction_change_history }
}
