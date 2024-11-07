function checkIfWordExists(board, word) {
  const ROWS = board.length,
    COLS = board[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function backtrack(row, col, index) {
    if (index === word.length) return true;

    if (
      row < 0 ||
      row >= ROWS ||
      col < 0 ||
      col >= COLS ||
      board[row][col] !== word[index]
    )
      return false;

    const currentValue = board[row][col];

    board[row][col] = "#";
    const result = directions.some(([rowDiff, colDiff]) =>
      backtrack(row + rowDiff, col + colDiff, index + 1)
    );
    board[row][col] = currentValue;

    return result;
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (backtrack(i, j, 0)) return true;
    }
  }

  return false;
}
