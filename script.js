// Initiera Plyr-spelaren
const player = new Plyr('#player', {
  controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'], // Specifika kontroller vi vill ha
});

// Lyssna på 'onStateChange' från YouTube API
const iframe = document.querySelector('iframe');
const playerVars = { 'enablejsapi': 1 }; // Aktivera JS API
const playerId = 'player'; // ID för spelaren

// Lägga till YouTube API-scriptet
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Skapa en YouTube-spelare
let youtubePlayer;
function onYouTubeIframeAPIReady() {
  youtubePlayer = new YT.Player(playerId, {
    events: {
      'onStateChange': onPlayerStateChange,
    }
  });
}

// Lyssna på speltillstånd
function onPlayerStateChange(event) {
  // Om annonsen spelas upp
  if (event.data === YT.PlayerState.AD_PLAYING) {
    // Hantera reklam här
    console.log('Reklam spelas upp, klicka på Hoppa över i spelaren.');
  }
}
