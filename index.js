const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = (array.find(element => element.result === "W"))
  if (result) {
    return result.year;
  } else {
    return undefined
  }

}
