// Initiera YouTube-spelaren med Plyr
const youtubePlayer = new Plyr('#youtube-player', {
  controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'], // Plyrs kontroller
  disableContextMenu: true, // Inaktivera högerklicksmenyer
  fullscreen: {
    enabled: true, // Tillåt fullskärm, men ej automatiskt vid laddning
  },
});
