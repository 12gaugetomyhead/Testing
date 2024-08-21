$(document).ready(function() {
    var audio = $('#background-music')[0];
    var isPlaying = false;

    // Start playing the audio when the page is ready
    audio.play();
    isPlaying = true;

    // Handle button click
    $('#enter-button').click(function() {
        $('#enter-site').fadeOut('slow', function() {
            $('#content').fadeIn('slow', function() {
                // Play the audio
                audio.play();
            });
        });
    });

    // Handle tab visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            if (isPlaying) {
                audio.play();
            }
        } else {
            if (!audio.paused) {
                audio.pause();
            }
        }
    });

    // Optional: Handle when audio ends to stop playing
    audio.onended = function() {
        isPlaying = false;
    };
});
