const getItem = (xs, i) => xs[(xs.length + i) % xs.length];

export const count = (x, y, world) => (getItem(getItem(world, y), x) ? 1 : 0);

const neighbours = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

const getNeighbours = (x, y, world) =>
  neighbours.reduce(
    (total, [dx, dy]) => total + count(x + dx, y + dy, world),
    0
  );

export default (world) =>
  world.map((row, y) =>
    row.map((alive, x) => {
      const numberOfLiveNeighbors = getNeighbours(x, y, world);
      return (
        numberOfLiveNeighbors === 3 || (alive && numberOfLiveNeighbors === 2)
      );
    })
  );
