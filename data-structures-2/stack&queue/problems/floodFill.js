function floodFill(image, startRow, startCol, newColor) {
  const rows = image.length,
    cols = image[0].length;
  const targetColor = image[startRow][startCol];

  if (targetColor === newColor) return image;

  const queue = [[startRow, startCol]];
  image[startRow][startCol] = newColor;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    const [currentRow, currentCol] = queue.shift();

    for (const [dx, dy] of directions) {
      const nextRow = currentRow + dx;
      const nextCol = currentCol + dy;

      if (
        nextRow >= 0 &&
        nextCol >= 0 &&
        nextRow < rows &&
        nextCol < cols &&
        image[nextRow][nextCol] === targetColor
      ) {
        image[nextRow][nextCol] = newColor;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  return image;
}
