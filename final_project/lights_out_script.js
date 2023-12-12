document.addEventListener('DOMContentLoaded', function () {
  const gridSize = 5;
  const grid = document.getElementById('grid');
  const resetButton = document.getElementById('resetButton');
  const returnHomeButton = document.getElementById('returnHomeButton');
  const bgMusic = document.getElementById('bgMusic');

  function toggleSquare(square) {
    square.classList.toggle('is-off');
    toggleAdjacentSquares(square);
  }

  function toggleAdjacentSquares(square) {
    const rowIndex = +square.getAttribute('data-row');
    const colIndex = +square.getAttribute('data-col');

    const directions = [
      { row: -1, col: 0 },
      { row: 1, col: 0 },
      { row: 0, col: -1 },
      { row: 0, col: 1 }
    ];

    for (const dir of directions) {
      const adjRow = rowIndex + dir.row;
      const adjCol = colIndex + dir.col;

      if (adjRow >= 0 && adjRow < gridSize && adjCol >= 0 && adjCol < gridSize) {
        const adjSquare = document.querySelector(`[data-row="${adjRow}"][data-col="${adjCol}"]`);
        adjSquare.classList.toggle('is-off');
      }
    }
  }

  function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('data-row', i);
        square.setAttribute('data-col', j);
        square.addEventListener('click', () => {
          toggleSquare(square);
        });
        grid.appendChild(square);
      }
    }
  }

  function resetGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.classList.remove('is-off');
    });
  }

  resetButton.addEventListener('click', resetGrid);
  returnHomeButton.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect to index.html
  });

  generateGrid();
  bgMusic.play(); // Play background music
});
