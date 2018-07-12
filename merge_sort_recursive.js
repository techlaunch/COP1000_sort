function mergerSortRecursive(array){
  // base case
  if(array.length <= 1)return array;

  // devide an conquer ...
  var leftHalf = array.slice(0,array.length/2);
  var rightHalf = array.slice(array.length/2);
  var leftSorted = mergerSortRecursive(leftHalf);
  var rigthSorted = mergerSortRecursive(rightHalf);

  // merge subarrays
  return merge(leftSorted, rigthSorted);
}

function merge(left, right){
  var result = [];
  var iLeft  = 0;
  var iRight = 0;

  // while result is not fully populated
  while (result.length < (left.length + right.length)) {
    if(iLeft === left.length) result = result.concat(right.slice(iRight));

    else if(iRight === right.length) result = result.concat(left.slice(iLeft));

    else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);

    else result.push(right[iRight++]) ;
  }

  return result;
}







function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  }
  else {
    const left = list.slice(0, list.length / 2);
    const right = list.slice(list.length / 2);
    let lSorted = mergeSort(left);
    let rSorted = mergeSort(right);

    return merge(lSorted, rSorted);
  }
}

// compare the arrays item by item and return the concatenated result
function merge(l, r) {
  let output = [];
  let lpr = 0;
  let rpr = 0;

  console.log('left ',l, '  right ', r);

  while (output.length < (l.length + r.length)) {
    if(lpr === l.length){
      output = output.concat(r.slice(rpr));
    }
    else if(rpr === r.length){
      output = output.concat(l.slice(lpr));
    }
    else if (l[lpr] > r[rpr]) {
      output.push(r[rpr]);
      rpr++;
    } 
    else {
      output.push(l[lpr]);
      lpr++;
    }
  }
  return output;
}

const list = [5, 1, 3, 7, 2, 4, 8, 6, 9];
console.log('result ', mergeSort(list)); 