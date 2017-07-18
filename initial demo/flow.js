// create canvas

var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// fade beginning

function fadeIn(element) {
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 100);
}

canvas.style.opacity = 0

// When video stop

document.getElementById('videoPlay').addEventListener('ended',function(){
    console.log('Video has ended!');
    var s = document.getElementById('videoPlay').style;
    s.opacity = 1;
    (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,100)})();
    setTimeout(function(){
    	let element = document.getElementById("show")
    	element.style.display ="block"
    	fadeIn(element);
    }, 10);
  }, false);


document.getElementById('show').addEventListener('submit',function(){
    console.log('form submitted!');
    var s = document.getElementById('show').style;
    s.opacity = 1;
    (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,100)})();
    setTimeout(function(){fadeIn(canvas)}, 1000);
  }, false);


fadeIn(videoPlay)

var commentList

$.ajax("https://docs.google.com/spreadsheets/d/1mY0ih_rAWPoXApvCq4N-x2V3u_ibSm4MGEwM7nzhItE/pub?&gid=0&range=F1&output=csv").done(function(result){
commentList = result
console.log(commentList)
});

console.log(commentList)



var mouse = {
	x: undefined,
	y: undefined
}

var colorArray = [
	"#1E6CFF",
	"#1EB7FF",
	"#20FFF1",
	"#4FB7FF",
	"#4FFFAF",
]

window.addEventListener('mousemove', 
	function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
})

// object



function Rectangle(x, y, dx, dy, r, text) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.r = r;
	this.text = text
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function () {
		c.fillStyle = this.color
		c.fill();
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		c.lineWidth = 3;
		c.font = "30px Arial";
		c.fillText("Explore the answers of others...",30,50);
	}

	this.update = function() {
			if (this.x > innerWidth || this.x < 0) {
				this.dx = -this.dx;
			}
			if (this.y > innerHeight || this.y < 0) {
				this.dy = -this.dy;
			}		

			this.y += this.dy;
			this.x += this.dx;

			// interactivity

			if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && 
				mouse.y - this.y < 50 && mouse.y - this.y > -50) {

			c.font = "20px Arial";
			c.fillText(this.text,this.x,(this.y + 50));

			}
				//(this.r += 1) 
			//console.log(inputArray[i])
			//if (this.r > 40){
			//	this.r =40;
//			}
//			}
//			
//			else if (this.r > 10){
//				this.r = this.r - 1;
//			}

			this.draw()
	}
}
	
var commentArray

 rectangleArray = [];

setTimeout(function(){ 
	commentArray = commentList.split(',');
	for (var i = 0; i < 20; i++) {
	var x = Math.random() * innerWidth;
	var y = Math.random() * innerHeight;
	var dx = (Math.random() -0.5)/5;
	var dy = (Math.random() -0.5)/5;
	var r = 10;
	var text = commentArray[i]
	rectangleArray.push(new Rectangle(x,y,dx,dy,r,text));
}}, 10000);




console.log(commentList)

// rectangles



function animate() {
	
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth,innerHeight)

	for (var i = 0; i < rectangleArray.length; i++) {
		rectangleArray[i].update();
	}
}

animate()

function postToSheet(message) {
	$.post(
	  "https://script.google.com/macros/s/AKfycbxyPRG3W3tro5Gvni_b9BcHFiMIdq1SRQT7L9-OHdCPEK_BLb8/exec",
	  { message: message}
	);
	console.log("posted")
}


$(document).ready(function(){ 
    $("#show").submit(function(event){ 
        event.preventDefault(); 
    }); 
})

$.ajax({
            url: Auto_Complete_Link, 
            type: "GET",   
            dataType: 'jsonp',
            cache: false,
            success: function(response){                          
                alert(response);                   
            }           
        }); 

//		c.fillRect(x, y, 20,20)
//	//

//	if (x > innerWidth || x < 0) {
//		dx = -dx;
//	}
//	if (y > innerHeight || y < 0) {
//		dy = -dy;
//	}//

//	y += dy;
//	x += dx;

//c.beginPath();
//var values = randomCoordinate();
//c.moveTo(values[0], values[1]);
//	var values = randomCoordinate();
//	c.lineTo(values[0], values[1]);
//c.strokeStyle = "cyan";
//c.stroke();
//

//canvas.onmousemove = function(e) {//

//  // important: correct mouse position:
//  var rect = this.getBoundingClientRect(),
//      x = e.clientX - rect.left,
//      y = e.clientY - rect.top,
//      i = 0, r;
//  
//  c.clearRect(0, 0, canvas.width, canvas.height); // for demo
//   
//  while(r = rects[i++]) {
//    // add a single rect to path:
//    ctx.beginPath();
//    ctx.rect(r.x, r.y, r.w, r.h);    
//    
//    // check if we hover it, fill red, if not fill it blue
//    ctx.fillStyle = ctx.isPointInPath(x, y) ? "red" : "blue";
//    ctx.fill();
//  }



