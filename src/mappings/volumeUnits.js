export default Object.freeze({
  ml: {
    ml: v => v,
    l: v => +v / 1000,
    gal: v => +v * 0.000264172
  },
  l: {
    ml: v => +v * 1000,
    l: v => v,
    gal: v => +v * 0.264172
  },
  gal: {
    ml: v => +v * 3785.41,
    l: v => +v * 3.78541,
    gal: v => v
  }
})
