export default Object.freeze({
  g: {
    g: v => v,
    kg: v => +v / 1000,
    lb: v => +v * 0.00220462
  },
  kg: {
    g: v => +v * 1000,
    kg: v => v,
    lb: v => +v * 2.20462
  },
  lb: {
    g: v => +v / 0.00220462,
    kg: v => +v / 2.20462,
    lb: v => +v
  }
})
