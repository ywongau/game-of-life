import { Engine } from "./engine";
const width = 3;
const height = 3;
const next = Engine(width, height);
const createEmtpyWord = () => [...Array(3)].map(() => [...Array(3)]);

test("given [] returns []", () => {
  expect(
    next([
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ])
  ).toEqual([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);
});
test('given single cell, it dies', () => {
    expect(
        next([
          [undefined, undefined, undefined],
          [undefined, true, undefined],
          [undefined, undefined, undefined],
        ])
      ).toEqual([
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
      ]);
});
test('given 3 live neighboring cells, it lives on', () => {
    expect(
        next([
          [undefined, undefined, true],
          [true, true, undefined],
          [true, undefined, undefined],
        ])
      ).toEqual([
        [undefined, undefined, undefined],
        [true, true, undefined],
        [true, undefined, undefined],
      ]);
});
/*
o o x
x x o 
x o o
   0,0      0,1         0,2
[[undefined,undefined,undefined]
   1,0      1,1               
[undefined,undefined,undefined]
[undefined,undefined,undefined]]


*/

// [
//     undefined, undefined, undefined,
//     undefined, true, undefined,
//     undefined, undefined, undefined,
// ]
