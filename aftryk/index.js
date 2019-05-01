let reflections = `
	05-04-2019 | Trails r/maintenance/3h r/updating/5h/ v/prototyping/1h
	06-04-2019 | Trails r/updating/1h | Aftryk r/exploration/3h r/updating/2h r/interaction/1h
	07-04-2019 | Aftryk r/exploration/3h
	08-04-2019 | Trails r/updating/4h v/exploration/1h
	09-04-2019 | Trails r/updating/2h r/coordinate/1h
	20-04-2019 | rickshaw v/editing/3h
	21-04-2019 | rickshaw v/prototype/6h
	22-04-2019 | rickshaw v/storyboard/2h v/prototype/4h
	27-04-2019 | rickshaw v/storyboard/5h
	`

let parse = (text) => {
	let dayData = text.split(/\n/).map(ele => ele.split(/\n/)).slice(1)
	dayData.pop()
	const projects = {}
	const sectionCalendar = {}
	let log = []
	dayData.forEach(day => {
		let date = []
		let data

		data = day[0].split(/ \| /)
		date.push(data[0].match(/\d+-\d+-\d+/g)[0])
		sectionCalendar[data[0].match(/\d+-\d+-\d+/g)[0]] = {}

		data.slice(1).forEach(project => {
			let totalHours = project.match(/\d+/g).map(Number).reduce((a,b) => a + b)
			let projectActivities = project.split(/ /)
			let projectName = projectActivities[0]

			date.push([projectName, totalHours])


			if(!projects[projectName]){
				projects[projectName] = {}
			}

			projectActivities.slice(1).forEach(activity => {
				let parts = activity.split(/\//)
			
				if (!projects[projectName][parts[1]]) {
					projects[projectName][parts[1]] = parseInt(parts[2].match(/\d+/g)[0])
				} else {
					projects[projectName][parts[1]] += parseInt(parts[2].match(/\d+/g)[0])
				}
				if (!sectionCalendar[data[0].match(/\d+-\d+-\d+/g)[0]][parts[0]]) {
					sectionCalendar[data[0].match(/\d+-\d+-\d+/g)[0]][parts[0]] = parseInt(parts[2].match(/\d+/g)[0])
				} else {
					sectionCalendar[data[0].match(/\d+-\d+-\d+/g)[0]][parts[0]] += parseInt(parts[2].match(/\d+/g)[0])
				}
				
			})
		})
		log.push(date)
	})
	console.log(projects)
	return([log, projects, sectionCalendar])
}

let convertToLineDiagramStructure = (data) => {
	let lineChartData = {
				labels: [],
				datasets: [{
					label: 'Trails',
					borderColor: "white",
					backgroundColor: '#FF4F52',
					data: [],
					borderDash: [2,2],
					borderWidth: 2,
				}, {
					label: 'Aftryk',
					borderColor: "white",
					backgroundColor: '#FFA1A8',
					data: [],
					borderDash: [10,5],
					borderWidth: 2,
				}]
			}

	data.forEach(element => {
		const dateData = element[0].split("-")
		const timestamp = new Date(`${dateData[1]}/${dateData[0]}/${dateData[2]}`)
	
		element.length < 3 && element[1][0] !== "Trails" ? element.push(["Trails", 0]) :
		element.length < 3 && element[1][0] !== "Trails"

		element.slice(1).forEach(project => {
			const data = {
    			x: timestamp,
    			y: project[1],
			};
			(project[0] === "Trails") ? lineChartData.datasets[0].data.push(data)
									  : lineChartData.datasets[1].data.push(data)
		})
	})
	console.log(lineChartData)
	return(lineChartData)
}


let [dates, projects, sectionCalendar] = parse(reflections)

lineChartData = convertToLineDiagramStructure(dates)
console.log(lineChartData.datasets[0].data)
//
//window.onload = function() {
	//var ctx = document.getElementById('canvas').getContext('2d');
	//ctx.height = 280;
	//window.myLine = Chart.Line(ctx, {
		//data: lineChartData,
		//options: {
			//scales: {
            	//yAxes: [{
                	//stacked: true
            	//}]
        	//},
			//legend: {
				//display: false
			//},
			//responsive: true,
  			//maintainAspectRatio: false,
			//hoverMode: 'index',
		//}
	//});
//};

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function drawViz(log){
  let svg = document.getElementById('viz')

  for (var i = 0; i < 12; i++) {
  	let days = daysInMonth(i+1, new Date().getFullYear())
  	Array.from(Array(days).keys()).forEach((element,index) => {
  		let dayData = sectionCalendar[`${('0' + index).slice(-2)}-${('0' + i).slice(-2)}-${new Date().getFullYear()}`]

  		let sector

  		if (dayData){
  			sector = Object.keys(dayData).reduce((a, b) => dayData[a] > dayData[b] ? a : b);
  		} else {
  			sector = 'missing'
  		}
        let xCoordinate = 100 + (i%4)*110 + (index)%7 * 14
        let yCoordinate = (Math.floor(i/4)%4)*82 + Math.floor((index)/7) * 14
        let rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect.setAttribute('x',xCoordinate);
        rect.setAttribute('y',yCoordinate);
        rect.setAttribute('title',element[0]);
        rect.setAttribute('width',13);
        rect.setAttribute('height',13);
        rect.setAttribute('fill','#95B3D7');
        rect.setAttribute('rx', 2);
        rect.setAttribute('ry', 2);
        rect.setAttribute('class',  sector == "a"     ? "audio" 
                                    : sector == "v"   ? "visual" 
                                    : sector == "r"   ? "research"
                                    : "no_entry");
        rect.setAttribute('href', 'http://www.google.com');

        let link = document.createElementNS("http://www.w3.org/2000/svg", "a");
        link.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', element[3]);

        link.appendChild(rect);


        svg.appendChild(link);    
  	})
  }

  log
  let audio = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    audio.setAttribute('x', '120');
    audio.setAttribute('y', '260');
    audio.setAttribute('fill', 'white');
    audio.textContent = 'Audio';
    svg.appendChild(audio);

    let visual = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    visual.setAttribute('x', '240');
    visual.setAttribute('y', '260');
    visual.setAttribute('fill', 'white');
    visual.textContent = 'Visual';
    svg.appendChild(visual);

    let research = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    research.setAttribute('x', '360');
    research.setAttribute('y', '260');
    research.setAttribute('fill', 'white');
    research.textContent = 'Research';
    svg.appendChild(research);

    [0,1,2].forEach(function(element){
        let rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect.setAttribute('x',element * 120 + 100);
        rect.setAttribute('y','250');
        rect.setAttribute('width',13);
        rect.setAttribute('height',13);
        rect.setAttribute('fill','#95B3D7');
        rect.setAttribute('rx', 2);
        rect.setAttribute('ry', 2);
        rect.setAttribute('class',  element + 1 == 1     ? "audio" 
                                    : element + 1 == 2   ? "visual" 
                                    : element + 1 == 3   ? "research"
                                    : "missing");
        svg.appendChild(rect);
        })

    let year = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        year.setAttribute('x', '10');
        year.setAttribute('y', '30');
        year.setAttribute('fill', 'white');
        year.setAttribute('font-size', '2rem');
        year.textContent = `${new Date().getFullYear()}`;
        svg.appendChild(year);
};

function getThreeActive(title){
	let o = projects[title]
	var keys = Object.keys(o);
	keys.sort(function(a,b){
  	return o[b] - o[a];
	})

	return keys.slice(0,3);
}

let Trails = getThreeActive("Trails")
let Aftryk = getThreeActive("Aftryk")
let rickshaw = getThreeActive("rickshaw")


var vue = new Vue({
  el: "#vue",
  data: {
    items: [
	    { 
	        title: "Coders At Work",
	        creator: "Peter Seibel",
	        time: "",
	        class: "book",
	    },{ 
	        title: "The Best We Could Do",
	        creator: "Thi Bui",
	        time: "",
	        class: "book",
	    }, { 
	        title: "Understanding Media",
	        creator: "Marshal Mcluhan",
	        time: "",
	        class: "book",
	    }, 
    ],
    projects: [
    	{
    		title: "Trails",
	        first: [Trails[0],projects["Trails"][Trails[0]]],
	        second: [Trails[1],projects["Trails"][Trails[1]]],
	        third: [Trails[2],projects["Trails"][Trails[2]]],
    	}, {
    		title: "Aftryk",
	        first: [Aftryk[0],projects["Aftryk"][Aftryk[0]]],
	        second: [Aftryk[1],projects["Aftryk"][Aftryk[1]]],
	        third: [Aftryk[2],projects["Aftryk"][Aftryk[2]]],
    	}, {
    		title: "Rickshaw",
	        first: [rickshaw[0],projects["rickshaw"][rickshaw[0]]],
	        second: [rickshaw[1],projects["rickshaw"][rickshaw[1]]],
	        third: [rickshaw[2],projects["rickshaw"][rickshaw[2]]],
    	},
    ],
  }
})

drawViz(lineChartData)