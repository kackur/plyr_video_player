const playerContainer = document.getElementById('player');
const player = new Plyr(`${playerContainer.id} video`);

// Funktion för att spela upp video baserat på länk
function loadVideo(link) {
    console.log('Laddar video:', link); // Logga länken

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
        console.log('Video källan har uppdaterats:', player.source); // Logga den nya källan
    } else {
        alert('Ogiltig video länk');
    }
}

const loadButton = document.getElementById('loadButton');
const videoLinkInput = document.getElementById('videoLink');

// Ladda video när knappen klickas
loadButton.addEventListener('click', () => {
    const link = videoLinkInput.value.trim();
    loadVideo(link);
});
