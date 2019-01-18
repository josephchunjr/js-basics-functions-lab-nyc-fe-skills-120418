// Code your solution in this file!
const startingPoint = 42
const feetInBlock = 264

function distanceFromHqInBlocks (block) {
  if (block < startingPoint) {
    return startingPoint - block
  } else {
    return block - startingPoint
  }
}

function distanceFromHqInFeet(block) {
  if (block < startingPoint) {
    return (startingPoint - block) * feetInBlock
  } else {
    return (block - startingPoint) * feetInBlock
  }
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    if (endingBlock < startingBlock) {
    return (startingBlock - endingBlock) * feetInBlock
  } else {
    return (endingBlock - startingBlock) * feetInBlock
  }
}