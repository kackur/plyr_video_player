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

    let videoSource = '';
    let provider = '';

    if (link.includes('youtube.com') || link.includes('youtu.be')) {
        // Bearbeta YouTube-länk
        const videoId = link.split('v=')[1]?.split('&')[0] || link.split('/').pop();
        videoSource = `https://www.youtube.com/watch?v=${videoId}`;
        provider = 'youtube';
    } else if (link.includes('vimeo.com')) {
        // Bearbeta Vimeo-länk
        const videoId = link.split('/').pop();
        videoSource = `https://vimeo.com/${videoId}`;
        provider = 'vimeo';
    }

    // Uppdatera spelaren med den nya källan
    if (videoSource) {
        player.source = {
            type: 'video',
            sources: [{
                src: videoSource,
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

const loadButton = document.getElementById('loadButton');
const videoLinkInput = document.getElementById('videoLink');

// Ladda video när knappen klickas
loadButton.addEventListener('click', () => {
    const link = videoLinkInput.value.trim();
    console.log('Klickad länk:', link); // Logga när knappen klickas
    loadVideo(link);
});
