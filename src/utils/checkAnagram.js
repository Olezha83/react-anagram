function checkAnagram(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return false
  }

  return (
    Array.from(stringOne.toLowerCase()).sort().join('') ===
    Array.from(stringTwo.toLowerCase()).sort().join('')
  )
}

export default checkAnagram
