import {line, drawPlayIcon, drawSlitscan} from "./drawing.js";
import {getMousePos, playPauseClick} from "./interaction.js";
import {videoCanvasInitialisation, slitscanCanvasInitialisation} from "./canvasInitialisation.js";
//________________________________________

var [videoContainer, video, videoCanvas, videoCtx, muted] = videoCanvasInitialisation()

var [slitscanCanvas, slitscanContext, canvasX, canvasY, slitscanXPos] = slitscanCanvasInitialisation()

video.oncanplay = videoInitialisation; // set the event to the play function that 
                                  // can be found below
                                  
function videoInitialisation(event){ // this is a referance to the video
    // the video may not match the canvas size so find a scale to fit
    videoContainer.scale = Math.min(
                         videoCanvas.width / this.videoWidth, 
                         videoCanvas.height / this.videoHeight); 
    videoContainer.ready = true;
    // the video can be played so hand it off to the display function
    requestAnimationFrame(updateCanvasWrapper);
    // add instruction
    document.getElementById("playPause").textContent = "Click video to play/pause.";
}

function updateCanvas(){
    videoCtx.clearRect(0,0,videoCanvas.width,videoCanvas.height); 
    // only draw if loaded and ready
    if(videoContainer !== undefined && videoContainer.ready){ 
        // find the top left of the video on the canvas
        video.muted = muted;
        var scale = videoContainer.scale;
        var vidH = videoContainer.video.videoHeight;
        var vidW = videoContainer.video.videoWidth;
        var top = videoCanvas.height / 2 - (vidH /2 ) * scale;
        var left = videoCanvas.width / 2 - (vidW /2 ) * scale;
        // now just draw the video the correct size
        videoCtx.drawImage(videoContainer.video, left, top, vidW * scale, vidH * scale);
        if(videoContainer.video.paused){ // if not playing show the paused screen 
            drawPlayIcon(videoCtx, videoCanvas);
        }

    [canvasX, canvasY] = drawSlitscan(videoContainer, videoCtx, slitscanContext, canvasX, canvasY, slitscanXPos)
    line(videoCtx, slitscanXPos);
    }
    // all done for display 
    // request the next frame in 1/60th of a second
    requestAnimationFrame(updateCanvasWrapper);

}

function updateCanvasWrapper(){
  return updateCanvas()
}

function playPauseClickWrapper(){
  playPauseClick(videoContainer)
}

videoCanvas.addEventListener('mousemove', function(evt) {
  //console.log("mousePos")
  var mousePos = getMousePos(videoCanvas, evt);
  //console.log(mousePos)
  slitscanXPos = mousePos.x
}, false);

// register the event
videoCanvas.addEventListener("click",playPauseClickWrapper, true);
