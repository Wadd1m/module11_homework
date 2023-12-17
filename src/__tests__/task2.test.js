const countDown = require('../task2.js')

describe('countDown examination', () => {
  it('Count down from 7', () => {
    const received = countDown(7)
    expect(received).toEqual([7, 6, 5, 4, 3, 2, 1])
  }),
  it('Count down from 1', () => {
    const received = countDown(1)
    expect(received).toEqual([1])
  }),
  it('Count down from 0', () => {
    const received = countDown(0)
    expect(received).toEqual([])
  }),
  it('Count down from -1', () => {
    const received = countDown(-1)
    expect(received).toEqual([])
  })
})