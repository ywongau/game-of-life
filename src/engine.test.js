import { expect } from 'chai';
import next, { count } from './engine';
const _ = false;
const o = true;
test('given [] returns []', () => {
  expect(
    next([
      [_, _, _],
      [_, _, _],
      [_, _, _],
    ])
  ).to.deep.equal([
    [_, _, _],
    [_, _, _],
    [_, _, _],
  ]);
});
test('given single cell, it dies', () => {
  expect(
    next([
      [_, _, _],
      [_, o, _],
      [_, _, _],
    ])
  ).to.deep.equal([
    [_, _, _],
    [_, _, _],
    [_, _, _],
  ]);
});
test('given 3 live neighboring cells, it lives on', () => {
  const result = next([
    [_, _, o],
    [o, o, _],
    [o, _, _],
  ]);
  expect(result[1][1]).to.equal(true);
});
test('given 4 live neighbors, it dies', () => {
  const result = next([
    [_, _, o],
    [o, o, _],
    [o, o, _],
  ]);
  expect(result[1][1]).to.equal(_);
});
test('given 2 live neighbors, it lives', () => {
  const result = next([
    [_, _, o],
    [o, o, _],
    [_, _, _],
  ]);
  expect(result[1][1]).to.equal(o);
});
test('given 3 live neighbors, a cell is born', () => {
  const result = next([
    [_, _, o],
    [o, _, _],
    [_, o, _],
  ]);
  expect(result[1][1]).to.equal(o);
});
test('given 2 live neighbors, a cell is NOT born', () => {
  const result = next([
    [_, _, o],
    [o, _, _],
    [_, _, _],
  ]);
  expect(result[1][1]).to.equal(_);
});
test('world edges are wrapped', () => {
  const result = next([
    [_, _, _],
    [_, _, _],
    [o, o, o],
  ]);
  expect(result[0][1]).to.equal(o);
});

test('wrap when counting -1, -1', () => {
  expect(
    count(-1, -1, [
      [_, _, _],
      [_, _, _],
      [_, _, o],
    ])
  ).to.equal(1);
});
test('wrap when counting 3, 3', () => {
  expect(
    count(3, 3, [
      [o, _, _],
      [_, _, _],
      [_, _, _],
    ])
  ).to.equal(1);
});
