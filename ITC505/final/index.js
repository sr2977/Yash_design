document.addEventListener('DOMContentLoaded', function () {
  const lightsOutButton = document.getElementById('lightsOutButton');
  const otherGameButton = document.getElementById('otherGameButton');
  const bgMusic = document.getElementById('bgMusic');

  lightsOutButton.addEventListener('click', () => {
    window.location.href = 'lights_out_game.html'; // Navigate to Lights Out game
    bgMusic.play(); // Play background music
  });

  otherGameButton.addEventListener('click', () => {
    window.location.href = 'tic_tac_toe_game.html'; // Navigate to another game
    bgMusic.play(); // Play background music
  });
});
