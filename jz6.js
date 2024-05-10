function minNumberInRotateArray(rotateArray) {
  if (!rotateArray.length) return 0
  let left = 0,
    right = rotateArray.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (rotateArray[mid] > rotateArray[right]) {
      left = mid + 1
    } else if (rotateArray[mid] < rotateArray[right]) {
      right = mid
    } else {
      right--
    }
  }
  return rotateArray[left]
}

console.log(minNumberInRotateArray([1, 1, 0, 1, 0, 1, 1]));