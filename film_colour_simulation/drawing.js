function drawTimeline(colour_history) {
	// draw colour timeline
	timeline.width = 2 * colour_history.length
	timeline.height = 200 * 1
	timeline.style.marginLeft = '100px'
	let ctx = timeline.getContext('2d')
	let j = -1
	while (++j < colour_history.length) {
		let [hue, saturation, lightness] = colour_history[j]
		saturation = Math.round(saturation * 100)
		lightness = Math.round(lightness * 100)
		ctx.fillStyle = `hsl(${hue},${saturation}%,${lightness}%)`
		ctx.fillRect(j * timeline.width / colour_history.length, 0, timeline.width / colour_history.length, timeline.height)
	}
}

function drawChart(colour_history, direction_change_history = []) {
	// graph breakdown of colour_history and optionally mark direction_change_history
	Plotly.newPlot('chart', [
		{
			y: colour_history.map(([_, saturation]) => saturation),
			type: 'scatter',
			fill: 'tozeroy',
			fillcolor: 'rgba(0,0,0,0.8)',
			line: {
				color: 'black',
				width: 1,
			},
			name: 'Saturation',
		},
		{
			y: colour_history.map(([, , lightness]) => lightness),
			type: 'scatter',
			fill: 'tozeroy',
			fillcolor: 'rgba(255,255,255,0.5)',
			line: {
				color: '#aaa',
				width: 1,
			},
			name: 'Lightness',
		},
	], {
		shapes: [
			...direction_change_history.map(i => ({
				type: 'line',
				x0: i,
				x1: i,
				y0: 0,
				y1: 1,
				line: {
					color: 'rgba(0,0,0,1)',
					width: 1,
				},
			})),
			...colour_history.map(([hue], i) => ({
				type: 'line',
				x0: i,
				x1: i,
				y0: 0,
				y1: 1,
				line: {
					color: `hsla(${hue},100%,50%,1)`,
					width: 1,
				},
				layer: 'below',
			})),
		],
		xaxis: {
			showgrid: false,
		},
		yaxis: {
			showgrid: false,
			range: [0, 1],
		},
	})
}
