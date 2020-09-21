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

const getNumberOfNeighbours = (x, y, world) =>
  neighbours.reduce(
    (total, [dx, dy]) => total + count(x + dx, y + dy, world),
    0
  );

export default (world) =>
  world.map((row, y) =>
    row.map((alive, x) => {
      const numberOfNeighbors = getNumberOfNeighbours(x, y, world);
      return numberOfNeighbors === 3 || (alive && numberOfNeighbors === 2);
    })
  );
