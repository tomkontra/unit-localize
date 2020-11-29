import weightUnits from './mappings/weightUnits'
import volumeUnits from './mappings/volumeUnits'
import gravityUnits from './mappings/gravityUnits'

function convertUnits(units, value, currentUnit, newUnit) {
  if (value == null) {
    return value
  }
  const currentKnown = {}.hasOwnProperty.call(units, currentUnit)
  const newKnow = {}.hasOwnProperty.call(units, newUnit)
  if (currentKnown && newKnow) {
    return units[currentUnit][newUnit](value)
  }
  throw new Error(`unkown conversion from ${currentUnit} to ${newUnit}`)
}

export function convertWeight(value, currentUnit, newUnit) {
  return convertUnits(weightUnits, value, currentUnit, newUnit)
}

export function convertVolume(value, currentUnit, newUnit) {
  return convertUnits(volumeUnits, value, currentUnit, newUnit)
}

export function convertGravity(value, currentUnit, newUnit) {
  return convertUnits(gravityUnits, value, currentUnit, newUnit)
}
