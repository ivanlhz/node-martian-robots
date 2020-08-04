import {getTurn, getOrientation, walk, turnToThe, newOrientation} from '../src/robot'

describe('Test robot fuctions', () => {
  test(`Should return L or R`, () => {
    expect(getTurn('L')).toBe('L')
    expect(getTurn('R')).toBe('R')
  })

  test(`Should return orientation`, () => {
    expect(getOrientation('N')).toBe('N')
    expect(getOrientation('S')).toBe('S')
    expect(getOrientation('E')).toBe('E')
    expect(getOrientation('W')).toBe('W')
  })

  test(`SHould increment the posicion in the orientation`, () => {
    expect(walk('N',{x:1,y:1}).y).toBe(2)
    expect(walk('S',{x:1,y:1}).y).toBe(0)
    expect(walk('E',{x:1,y:1}).x).toBe(2)
    expect(walk('W',{x:1,y:1}).x).toBe(0)
  })

  test(`Should turn to a new orientation`, () => {
    expect(turnToThe('N','L')).toBe('W')
    expect(turnToThe('N','R')).toBe('E')
  })

  test(`SHould return new orientation`, () => {
    expect(newOrientation(0)).toBe('N')
    expect(newOrientation(1)).toBe('E')
    expect(newOrientation(2)).toBe('S')
    expect(newOrientation(3)).toBe('W')
    expect(newOrientation(4)).toBe('N')
  })
})