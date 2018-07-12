function quickSort(arr, left, right) {
  var len = arr.length,
    pivot,
    partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}


function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}


function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}










function quickSort(arr) {
  let lo = 0;
  let hi = arr.length - 1;
  let pivot = arr[hi];

  if(arr.length < 1) {
    return arr;
  }

  while (lo < hi) {
    if (pivot < arr[lo]) {
      swap(arr, hi, lo);
      hi--;
      swap(arr, hi, lo);
    }
    else {
      lo++
    }
  }
  
  return quickSort(arr.slice(0, lo)).concat([pivot], quickSort(arr.slice(hi + 1)));
}

function swap(arr, hi, lo) {
  var temp = arr[lo];
  arr[lo] = arr[hi];
  arr[hi] = temp;
}

let a = [8,4,6,2,7,3,5];

quickSort(a);