export default Object.freeze({
  SG: {
    SG: v => v,
    '°Bx': v => (-463.37 + 668.72 * +v - 205.347 * (+v) ** 2) * 1.04,
    '°P': v => -463.37 + 668.72 * +v - 205.35 * (+v * +v)
  },
  '°Bx': {
    SG: v => {
      const CorrectedBrix = +v / 1.04
      return (
        1.000019 +
        0.003865613 * CorrectedBrix +
        0.00001296425 * CorrectedBrix ** 2 +
        0.00000005701128 * CorrectedBrix ** 3
      )
    },
    '°Bx': v => v,
    '°P': v => v
  },
  '°P': {
    SG: v => +v / (258.6 - (+v / 258.2) * 227.1) + 1,
    '°Bx': v => v,
    '°P': v => v
  }
})
