const playerContainer = document.getElementById('player');

// Skapa Plyr-spelaren
const player = new Plyr(`${playerContainer.id} video`, {
    controls: [
        'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'
    ]
});

// Funktion för att spela upp video baserat på länk
function loadVideo(link) {
    console.log('Laddar video:', link); // Logga länken

    let videoId;
    let provider;

    if (link.includes('youtube.com') || link.includes('youtu.be')) {
        // Bearbeta YouTube-länk
        if (link.includes('youtube.com/watch?v=')) {
            videoId = link.split('v=')[1].split('&')[0];
        } else if (link.includes('youtu.be/')) {
            videoId = link.split('youtu.be/')[1];
        }
        provider = 'youtube';
    } else if (link.includes('vimeo.com')) {
        // Bearbeta Vimeo-länk
        videoId = link.split('/').pop();
        provider = 'vimeo';
    }

    // Uppdatera spelaren med den nya källan
    if (videoId) {
        player.source = {
            type: 'video',
            sources: [{
                src: provider === 'youtube' ? videoId : videoId,
                provider: provider,
            }],
        };

        console.log('Video källan har uppdaterats:', player.source); // Logga den nya källan
        player.play().catch(error => {
            console.error('Det gick inte att spela upp videon:', error);
        }); // Spela upp videon automatiskt, med felhantering
    } else {
        alert('Ogiltig video länk');
    }
}

// Hårdkodad video länk
const videoLink = 'https://www.youtube.com/watch?v=CCW9Rvypvv4'; // Byt ut mot din länk
loadVideo(videoLink);
