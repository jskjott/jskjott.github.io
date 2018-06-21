export function line(videoCtx, slitscanXPos) {
    // line color
	  videoCtx.fillStyle = "#FF0000";

	  videoCtx.beginPath(); 
	  // Staring point
	  videoCtx.moveTo(slitscanXPos-12,0);
	  // End point
	  videoCtx.lineTo(slitscanXPos-12,300);
	  // Make the line visible
	  videoCtx.lineWidth = 3;
	  videoCtx.strokeStyle = '#FFFF00';
	  videoCtx.stroke();
}

export function drawPlayIcon(ctx, canvas){
     ctx.fillStyle = "black";  // darken display
     ctx.globalAlpha = 0.5;
     ctx.fillRect(0,0,canvas.width,canvas.height);
     ctx.fillStyle = "#DDD"; // colour of play icon
     ctx.globalAlpha = 0.75; // partly transparent
     ctx.beginPath(); // create the path for the icon
     var size = (canvas.height / 2) * 0.5;  // the size of the icon
     ctx.moveTo(canvas.width/2 + size/2, canvas.height / 2); // start at the pointy end
     ctx.lineTo(canvas.width/2 - size/2, canvas.height / 2 + size);
     ctx.lineTo(canvas.width/2 - size/2, canvas.height / 2 - size);
     ctx.closePath();
     ctx.fill();
     ctx.globalAlpha = 1; // restore alpha
}   

export function drawSlitscan(videoContainer, ctx, context, canvasX, canvasY, slitscanXPos){

  if(!videoContainer.video.paused){

    var imageData = ctx.getImageData(slitscanXPos-12, 0, 1, 300);

    context.putImageData(imageData, canvasX, canvasY);

    canvasX = canvasX + 1

    if (canvasX <= 1200 & canvasY == 900){
      canvasX = 0
      canvasY = 0
    }

    if (canvasX >= 1200){
      canvasY = canvasY + 300
      canvasX = 0

    }
  }
  return [canvasX,canvasY]
}