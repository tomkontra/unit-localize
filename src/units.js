function convert(value, sourceUnit, targetUnit) {
    return value
}

export default function units(value, defaultUnit, sourceUnit) {
    const localUnit = getLocalUnit(defaultUnit)
    if(sourceUnit) {
        return convert(value, sourceUnit, localUnit)
    }
    return convert(value, defaultUnit, sourceUnit)
}
