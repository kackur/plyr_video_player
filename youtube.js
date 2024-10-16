// Initiera YouTube-spelaren med loop och autoplay-funktionalitet
document.addEventListener('DOMContentLoaded', function() {
    const youtubePlayer = document.getElementById('youtube-iframe');

    const player = new YT.Player('youtube-iframe', {
        events: {
            'onReady': function(event) {
                event.target.playVideo();
            },
            'onStateChange': function(event) {
                if (event.data === YT.PlayerState.ENDED) {
                    // Spela om videon när den slutar
                    event.target.playVideo();
                }
            }
        }
    });
});
