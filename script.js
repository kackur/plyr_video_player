// Initiera spelaren med play/pause och timeline
const player = new Plyr('#player', {
  controls: [], // Vi inaktiverar Plyrs kontroller för att använda YouTubes istället
  disableContextMenu: true, // Inaktivera högerklicksmenyer
  settings: [], // Inga inställningsmenyer
  fullscreen: { enabled: true } // Aktivera fullskärm
});
