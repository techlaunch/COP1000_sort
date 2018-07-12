function selectionSort(arr) {
  var minIdx, temp,
    len = arr.length;
  for (var i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}



function SelectionSortInPlace(arr) {
  for (let k = 0; k < arr.length - 1; k++) {
    for (let i = k + 1; i < arr.length; i++) {
      // console.log(arr[k], arr[i]);

      if (arr[i] < arr[k]) {
        let temp = arr[k];

        arr[k] = arr[i];
        arr[i] = temp;
      }

    }
  }
  return arr;
}

SelectionSortInPlace([4,2,6,1,8]);