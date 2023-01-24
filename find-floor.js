function findFloor(arr, check) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  if (check > arr[arr.length - 1]) return arr[arr.length - 1];

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIdx] > check) {
      rightIdx = middleIdx - 1;
    }

    if (arr[middleIdx] < check) {
      if (arr[middleIdx + 1] > check) return arr[middleIdx];

      leftIdx = middleIdx + 1;
    }
  }
  return -1;
}

module.exports = findFloor;
