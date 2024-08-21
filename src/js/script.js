$(document).ready(function() {
    var audio = $('#background-music')[0];
    
    // Attempt to autoplay the audio
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            // Autoplay started successfully
            console.log("Audio is playing");
        }).catch(function(error) {
            // Autoplay failed, likely due to browser restrictions
            console.error('Autoplay failed:', error);
        });
    }
});
