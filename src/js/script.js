$(document).ready(function() {
    var audio = $('#background-music')[0];
    var isPlaying = false;

    // Try to autoplay the audio muted, then unmute
    function attemptAutoplay() {
        audio.muted = true;  // Start muted
        var playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(function() {
                audio.muted = false;  // Unmute after play starts
                isPlaying = true;
            }).catch(function(error) {
                console.error('Autoplay failed:', error);
                // You might handle the error here, such as displaying a "click to play" button
            });
        }
    }

    attemptAutoplay();

    // Handle tab visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            if (isPlaying) {
                audio.play().catch(function(error) {
                    console.error('Failed to resume audio:', error);
                });
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
