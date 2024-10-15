// Hämta spelarkontainern
const playerContainer = document.getElementById('player');

// Skapa Plyr-spelaren
const player = new Plyr(`${playerContainer.id} video`, {
    controls: [
        'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'
    ],
});

// Hårdkodad video länk (YouTube-exempel)
const videoLink = 'https://www.youtube.com/watch?v=CCW9Rvypvv4'; // Byt ut mot din länk

// Funktion för att spela upp video baserat på länk
function loadVideo(link) {
    console.log('Laddar video:', link); // Logga länken

    let videoId;
    let provider;

    // Kontrollera om det är en YouTube-länk
    if (link.includes('youtube.com') || link.includes('youtu.be')) {
        if (link.includes('youtube.com/watch?v=')) {
            videoId = link.split('v=')[1].split('&')[0];
        } else if (link.includes('youtu.be/')) {
            videoId = link.split('youtu.be/')[1];
        }
        provider = 'youtube';
    } 
    // Kontrollera om det är en Vimeo-länk
    else if (link.includes('vimeo.com')) {
        videoId = link.split('/').pop();
        provider = 'vimeo';
    }

    // Uppdatera spelaren med den nya källan
    if (videoId) {
        player.source = {
            type: 'video',
            sources: [{
                src: videoId,
                provider: provider,
            }],
        };

        console.log('Video källan har uppdaterats:', player.source); // Logga den nya källan
        player.play().catch(error => {
            console.error('Det gick inte att spela upp videon:', error);
        });
    } else {
        alert('Ogiltig video länk');
    }
}

// Ladda videon när sidan laddas
loadVideo(videoLink);
