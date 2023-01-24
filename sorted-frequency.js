function findFirst(arr, check) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIdx] < check) {
      leftIdx = middleIdx + 1;
    }

    if (arr[middleIdx] > check) {
      rightIdx = middleIdx - 1;
    }

    if (arr[middleIdx] === check) {
      if (arr[middleIdx - 1] < check || middleIdx - 1 < 0) {
        return middleIdx;
      }

      rightIdx = middleIdx - 1;
    }
  }
  return -1;
}

function findLast(arr, check, foundCheck) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIdx] < check) {
      leftIdx = middleIdx + 1;
    }

    if (arr[middleIdx] > check) {
      rightIdx = middleIdx - 1;
    }

    if (arr[middleIdx] === check) {
      if (arr[middleIdx + 1] > check || middleIdx + 1 >= arr.length) {
        return middleIdx;
      }

      leftIdx = middleIdx + 1;
    }
  }
  return -1;
}

function sortedFrequency(arr, check) {
  const firstFoundIdx = findFirst(arr, check);
  const lastFoundIdx = findLast(arr, check);

  return firstFoundIdx === -1 || lastFoundIdx === -1
    ? -1
    : 1 + lastFoundIdx - firstFoundIdx;
}

module.exports = sortedFrequency;
