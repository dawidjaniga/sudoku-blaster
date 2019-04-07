/* global test, expect */
import Blaster from '../src/blaster'
import HighestNumber from '../src/methods/highestNumber'
import Game from '../src/game'

test('resolve sudoku puzzle', () => {
  const input = [
    [0, 6, 0, 0, 1, 0, 0, 0, 4],
    [0, 8, 0, 0, 9, 0, 2, 0, 0],
    [4, 0, 0, 0, 0, 0, 6, 1, 3],

    [5, 0, 7, 4, 6, 0, 8, 3, 2],
    [0, 2, 4, 0, 3, 5, 0, 9, 6],
    [0, 3, 6, 2, 0, 0, 7, 0, 0],

    [6, 0, 0, 1, 5, 0, 4, 2, 0],
    [0, 4, 5, 0, 0, 0, 3, 7, 0],
    [0, 0, 8, 0, 0, 7, 0, 0, 0]
  ]
  const output = [
    [7, 6, 2, 5, 1, 3, 9, 8, 4],
    [3, 8, 1, 6, 9, 4, 2, 5, 7],
    [4, 5, 9, 8, 7, 2, 6, 1, 3],

    [5, 1, 7, 4, 6, 9, 8, 3, 2],
    [8, 2, 4, 7, 3, 5, 1, 9, 6],
    [9, 3, 6, 2, 8, 1, 7, 4, 5],

    [6, 7, 3, 1, 5, 8, 4, 2, 9],
    [1, 4, 5, 9, 2, 6, 3, 7, 8],
    [2, 9, 8, 3, 4, 7, 5, 6, 1]
  ]
  const sudoku = new Game(input)
  const methods = [
    new HighestNumber(sudoku)
  ]
  const blaster = new Blaster(sudoku, methods)
  expect(blaster.blast()).toEqual(output)
})

test('resolve sudoku puzzle', () => {
  const input = [
    [0, 1, 0, 0, 0, 0, 4, 3, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 5, 4, 9, 0, 0],

    [1, 7, 0, 0, 4, 0, 2, 0, 6],
    [0, 0, 0, 0, 9, 0, 0, 0, 3],
    [0, 0, 3, 0, 0, 6, 0, 8, 0],

    [0, 0, 1, 4, 7, 0, 0, 6, 0],
    [0, 0, 0, 5, 0, 8, 1, 2, 0],
    [0, 9, 0, 0, 6, 0, 3, 0, 4]
  ]
  const output = [
    [5, 1, 9, 6, 8, 7, 4, 3, 2],
    [7, 2, 4, 9, 1, 3, 6, 5, 8],
    [3, 8, 6, 2, 5, 4, 9, 1, 7],

    [1, 7, 8, 3, 4, 5, 2, 9, 6],
    [6, 5, 2, 8, 9, 1, 7, 4, 3],
    [9, 4, 3, 7, 2, 6, 5, 8, 1],

    [2, 3, 1, 4, 7, 9, 8, 6, 5],
    [4, 6, 7, 5, 3, 8, 1, 2, 9],
    [8, 9, 5, 1, 6, 2, 3, 7, 4]
  ]
  const sudoku = new Game(input)
  const methods = [
    new HighestNumber(sudoku)
  ]
  const blaster = new Blaster(sudoku, methods)
  expect(blaster.blast()).toEqual(output)
})
