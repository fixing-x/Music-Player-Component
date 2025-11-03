//console.log("hello world")

//event listener lecture

/*
GEC -> Context -> CI/CD -> Pros & Cons CI/CD ->
Dev Type -> (MERN, MEAN, NExt Developer ) ≠ Full Stack -> Why DB -> System Design -> Cloud Scaling -> Data Dominance (GPT Bitching) -> Memory Management
- Primitive (stack)
- Read (Heap)
*/
let btn = document.getElementById("playButton");
let playText = document.getElementById("playText");
// Play Button Variables
window.onload = function () {

    // Video
    var video = document.getElementById("video");
    // var seekBar = document.getElementById("seekBar");

    // // Event listener for the seek bar
    // seekBar.addEventListener("change", function () {
    //     // Calculate the new time
    //     var time = video.duration * (seekBar.value / 100);

    //     // Update the video time
    //     video.currentTime = time;
    // });

    // // Update the seek bar as the video plays
    // video.addEventListener("timeupdate", function () {
    //     // Calculate the slider value
    //     var value = (100 / video.duration) * video.currentTime;

    //     // Update the seek bar value
    //     seekBar.value = value;
    // });

    // // Pause the video when the seek bar is being dragged
    // seekBar.addEventListener("mousedown", function () {
    //     video.pause();
    // });

    // // Play the video when the seek bar is dropped
    // seekBar.addEventListener("mouseup", function () {
    //     video.play();
    // });
    
    video.addEventListener("click", function () {
        if (video.muted == true) {
            // Play the video
            video.muted=false;
            // Update the button text to 'Pause'
            // playButton.innerHTML = "Pause";
        } else {
            // Pause the video
            video.muted=true;

            // Update the button text to 'Play'
            // playButton.innerHTML = "Play";
        }
    }); 

    // Buttons
    //   var playButton = document.getElementById("playButton");
    // Event listener for the play/pause button
    btn.addEventListener("click", function () {
        if (video.paused == true) {
            // Play the video
            video.play();

            // Update the button text to 'Pause'
            // playButton.innerHTML = "Pause";
        } else {
            // Pause the video
            video.pause();

            // Update the button text to 'Play'
            // playButton.innerHTML = "Play";
        }
    });

}


