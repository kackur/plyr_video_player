// videoPlayer.js
const playerContainer = document.createElement('div');
playerContainer.id = 'player';
document.body.appendChild(playerContainer);

const player = new Plyr(`${playerContainer.id} video`);

// Funktion för att spela upp video baserat på länk
function loadVideo(link) {
    let videoSource = '';

    if (link.includes('youtube.com') || link.includes('youtu.be')) {
        // Bearbeta YouTube-länk
        const videoId = link.split('v=')[1]?.split('&')[0] || link.split('/').pop();
        videoSource = `https://www.youtube.com/watch?v=${videoId}`;
    } else if (link.includes('vimeo.com')) {
        // Bearbeta Vimeo-länk
        const videoId = link.split('/').pop();
        videoSource = `https://vimeo.com/${videoId}`;
    }

    // Uppdatera spelaren med den nya källan
    if (videoSource) {
        player.source = {
            type: 'video',
            sources: [{
                src: videoSource,
                provider: link.includes('youtube.com') || link.includes('youtu.be') ? 'youtube' : 'vimeo',
            }],
        };
    } else {
        alert('Ogiltig video länk');
    }
}

// Expose the loadVideo function to the global scope
window.loadVideo = loadVideo;

// Create the video element
const videoElement = document.createElement('video');
videoElement.controls = true;
videoElement.crossorigin = true;
videoElement.playsinline = true;
const sourceElement = document.createElement('source');
sourceElement.src = '';
sourceElement.type = 'video/mp4';
videoElement.appendChild(sourceElement);
playerContainer.appendChild(videoElement);
