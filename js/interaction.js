export function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

export function playPauseClick(videoContainer){
     if(videoContainer !== undefined && videoContainer.ready){
          if(videoContainer.video.paused){                                 
                videoContainer.video.play();
          }else{
                videoContainer.video.pause();
          }
     }
}