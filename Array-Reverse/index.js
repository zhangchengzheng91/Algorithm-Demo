function reverse(array, start, end) {
  if (!Array.isArray(array)) {
    throw (Error('Array.isArray(array) === false'))
    return
  }
  start = start || 0
  end = end || array.length - 1
  const length = (end - start) / 2
  if (length <= 1) {
    return array
  }
  for (let i = 0; i < length; i++) {
    const frontIndex = start + i
    const endIndex = end - i
    const temp = array[frontIndex]
    array[frontIndex] = array[endIndex]
    array[endIndex] = temp
  }
  return array
}

module.exports = reverse
