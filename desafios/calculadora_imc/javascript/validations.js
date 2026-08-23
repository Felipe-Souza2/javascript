const MIN_HEIGHT = 0.5
const MAX_HEIGHT = 2.5

const MIN_WEIGHT = 0
const MAX_WEIGHT = 999

export function isHeightInvalid(height) {
  if (height == "") return true
  if (height < MIN_HEIGHT || height > MAX_HEIGHT) return true
  return false
}

export function isWeightInvalid(weight) {
  if (weight == "") return true
  if (weight < MIN_WEIGHT || weight > MAX_WEIGHT) return true
  return false
}
