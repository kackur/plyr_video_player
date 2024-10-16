// Initiera YouTube-videon med loop och autoplay-funktionalitet
document.addEventListener('DOMContentLoaded', function() {
    const youtubePlayer = document.getElementById('youtube-iframe');

    youtubePlayer.addEventListener('load', function() {
        const player = new YT.Player('youtube-iframe', {
            events: {
                'onStateChange': function(event) {
                    if (event.data === YT.PlayerState.ENDED) {
                        // Videon har slutat spela, spela den igen
                        event.target.playVideo();
                    }
                }
            }
        });
    });
});
