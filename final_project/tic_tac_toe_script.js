document.addEventListener('DOMContentLoaded', function () {
  const cells = document.querySelectorAll('.cell');
  const resetButton = document.getElementById('resetButton');
  const resultText = document.getElementById('result');
  const bgMusic = document.getElementById('bgMusic');
  bgMusic.play().catch(error => {
      // Autoplay was prevented
      // You might provide a UI element (like a button) to manually trigger the audio playback
  })

  let currentPlayer = 'X';
  let gameActive = true;
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const board = ['', '', '', '', '', '', '', '', ''];

  function handleCellClick(e) {
    const clickedCell = e.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (board[clickedCellIndex] !== '' || !gameActive) return;

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    checkWin();
    checkDraw();
    togglePlayer();
  }

  function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  function checkWin() {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        gameActive = false;
        resultText.textContent = `Player ${board[a]} wins!`;
        bgMusic.pause();
        return;
      }
    }
  }

  function checkDraw() {
    if (!board.includes('') && gameActive) {
      gameActive = false;
      resultText.textContent = "It's a draw!";
      bgMusic.pause();
    }
  }

  function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    board.fill('');
    cells.forEach(cell => {
      cell.textContent = '';
    });
    resultText.textContent = '';
    bgMusic.play();
  }

  cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
  });

  resetButton.addEventListener('click', resetGame);
});

const returnHomeButton = document.getElementById('returnHomeButton');

returnHomeButton.addEventListener('click', () => {
  window.location.href = 'index.html'; // Redirect to index.html
});
