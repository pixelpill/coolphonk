document.addEventListener('DOMContentLoaded', () => {
  const settingsBtn = document.querySelector('button.pill:nth-child(3)');
  const settingsPanel = document.getElementById('settings-panel');

  if (settingsBtn && settingsPanel) {
    settingsBtn.addEventListener('click', () => {
      settingsPanel.style.display =
        settingsPanel.style.display === 'block' ? 'none' : 'block';
    });
  }

  // 🎵 Modular music player
  const tracks = [
    'audio/arcade1.mp3',
    'audio/arcade2.mp3',
    'audio/arcade3.mp3'
  ];
  const audio = new Audio(tracks[Math.floor(Math.random() * tracks.length)]);
  audio.loop = true;
  audio.volume = 0.2;

  const musicToggle = document.getElementById('music-toggle');
  if (musicToggle) {
    musicToggle.addEventListener('change', () => {
      musicToggle.checked ? audio.play() : audio.pause();
    });
  } else {
    audio.play(); // default autoplay if no toggle
  }

  // 🪐 Easter egg: Konami code unlocks secret game
  let input = '';
  const code = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
  window.addEventListener('keydown', (e) => {
    input += e.key;
    if (input.replace(/[^a-zA-Z]/g, '').includes(code)) {
      window.location.href = 'games/secret.html';
    }
  });
});
