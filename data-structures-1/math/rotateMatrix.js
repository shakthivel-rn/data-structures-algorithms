function rotateMatrix(matrix) {
  let l = 0;
  let r = matrix.length - 1;

  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      const top = l;
      const bottom = r;

      // save the topleft
      const topLeft = matrix[top][l + i];

      // move bottom left into top left
      matrix[top][l + i] = matrix[bottom - i][l];

      // move bottom right into bottom left
      matrix[bottom - i][l] = matrix[bottom][r - i];

      // move top right into bottom right
      matrix[bottom][r - i] = matrix[top + i][r];

      // move top left into top right
      matrix[top + i][r] = topLeft;
    }

    r -= 1;
    l += 1;
  }
}
