const getNumberOfNeighbours = (x, y, world) => {
  const countCell = (x1, y1) => (world[y1 + 1]?.[x1] ? 1 : 0);
  return (
    countCell(y + 1, x) +
    countCell(y + 1, x + 1) +
    countCell(y, x + 1) +
    countCell(y - 1, x) +
    countCell(y - 1, x - 1) +
    countCell(y, x - 1) +
    countCell(y + 1, x - 1) +
    countCell(y - 1, x + 1)
  );
};
export const Engine = (width, height) => (world) =>
  world.map((row, y) =>
    row.map((cell, x) => {
      if (cell) {
        const numberOfNeighbours = getNumberOfNeighbours(x, y, world);
        return numberOfNeighbours === 2 || numberOfNeighbours === 3;
      }
      return false;
    })
  );
