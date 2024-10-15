// Initiera spelaren med play/pause och timeline
const player = new Plyr('#player', {
  controls: ['play', 'progress', 'fullscreen'], // Lägg till progress och fullscreen
  disableContextMenu: true, // Inaktivera högerklicksmenyer
  settings: [], // Inga inställningsmenyer
  fullscreen: { enabled: true } // Aktivera fullskärm
});
