document.addEventListener('DOMContentLoaded', () => {
  // Initiera YouTube-spelaren med Plyr
  const youtubePlayer = new Plyr('#youtube-player', {
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'], // Plyrs kontroller
    disableContextMenu: true, // Inaktivera högerklicksmenyer
    fullscreen: {
      enabled: true, // Tillåt fullskärm
    },
    loop: { active: true }, // Aktivera loop
    muted: true // Starta mutad
  });

  // Lägg till allow-attribut till YouTube iframe
  const youtubeIframe = document.querySelector('#youtube-player iframe');
  youtubeIframe.setAttribute('allow', 'autoplay; picture-in-picture');

  // Initiera Vimeo-spelaren med Plyr
  const vimeoPlayer = new Plyr('#vimeo-player', {
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'], // Plyrs kontroller
    disableContextMenu: true, // Inaktivera högerklicksmenyer
    fullscreen: {
      enabled: true, // Tillåt fullskärm
    },
    loop: { active: true }, // Aktivera loop
    muted: true // Starta mutad
  });

  // Lägg till allow-attribut till Vimeo iframe
  const vimeoIframe = document.querySelector('#vimeo-player iframe');
  vimeoIframe.setAttribute('allow', 'autoplay; picture-in-picture');

  // Funktion för att pausa den andra spelaren
  function pauseOtherPlayer(currentPlayer) {
    if (currentPlayer === youtubePlayer) {
      vimeoPlayer.pause();
    } else if (currentPlayer === vimeoPlayer) {
      youtubePlayer.pause();
    }
  }

  // Lyssna på play-händelsen för YouTube-spelaren
  youtubePlayer.on('play', () => {
    pauseOtherPlayer(youtubePlayer);
  });

  // Lyssna på play-händelsen för Vimeo-spelaren
  vimeoPlayer.on('play', () => {
    pauseOtherPlayer(vimeoPlayer);
  });
});
