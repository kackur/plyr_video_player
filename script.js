// Initiera Plyr och anpassa kontrollerna
const player = new Plyr('#player', {
  controls: ['play'], // Endast Play/Paus-knappen visas
  fullscreen: { enabled: false } // Stänger av fullscreen-knappen
});
