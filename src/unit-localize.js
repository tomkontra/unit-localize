import symbol from "./symbol"
import units from "./units"

const unit = function Unit() {
    const unit = {}

    unit.configure = (config) => {
        unit.config = config
    }

    unit.u = (value, defaultUnit, sourceUnit) => {
        return units(value, defaultUnit, sourceUnit)
    }

    unit.s = (unit) => {
        return symbol(unit)
    }

    return unit
}

export default unit;