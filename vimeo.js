// Initiera Vimeo-spelaren med Plyr
const vimeoPlayer = new Plyr('#vimeo-player', {
  controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'], // Plyrs kontroller
  disableContextMenu: true, // Inaktivera högerklicksmenyer
  fullscreen: {
    enabled: true, // Tillåt fullskärm
  },
});
