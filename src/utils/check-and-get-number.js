export function checkAndGetInteger(fieldName, value) {
  const toInteger = Number.parseInt(value)

  if (Number.isNaN(toInteger))
    throw new Error(`${fieldName} must be a integer.`)

  return toInteger
}

export function checkAndGetFloat(fieldName, value) {
  const toFloat = Number.parseFloat(value)

  if (Number.isNaN(toFloat))
    throw new Error(`${fieldName} must be a float number.`)

  return toFloat
}
