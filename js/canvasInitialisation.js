export function videoCanvasInitialisation(){
    var mediaSource = "./media/compressed_traffic.mp4"
    var muted = true
    var videoCanvas = document.getElementById("videoCanvas") // get the canvas from the page
    var videoCtx = videoCanvas.getContext("2d")
    var videoContainer // object to hold video and associated info
    var video = document.createElement("video") // create a video element
    video.src = mediaSource
    // the video will now begin to load.
    // As some additional info is needed we will place the video in a
    // containing object for convenience
    video.autoPlay = true // ensure that the video does not auto play
    video.loop = true // set the video to loop.
    video.muted = muted
    videoContainer = {  // we will add properties as needed
         video : video,
         ready : false,   
    };

    return [videoContainer, video, videoCanvas, videoCtx, muted]
}

export function slitscanCanvasInitialisation(){
    var slitscanCanvas = document.getElementById("slitscanCanvas")
    var slitscanContext = slitscanCanvas.getContext("2d")
    var [slitscanXPos, canvasX, canvasY] = [0, 0, 0]

    return [slitscanCanvas, slitscanContext, canvasX, canvasY, slitscanXPos]
}
