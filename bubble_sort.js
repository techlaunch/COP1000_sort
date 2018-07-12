var o = {0:9, 1:3, 2:8, 3:2, 4:7, 5:6, 6:5, 7:4, 8:1}

function bubbleSort(items) {
  var length = Object.keys(items).length;

  for (var i = (length - 1); i >= 0; i--) {
    for (var j = (length - i); j > 0; j--) {

      // console.log('comparing ', items[j], items[j - 1]);
      // console.log('i ', i);
      // console.log('j ', j);

        if (items[j] < items[j - 1]) {
            //Swap the numbers
            var tmp = items[j];
            items[j] = items[j - 1];
            items[j - 1] = tmp;
        }
        console.log('Array ',items);
    }
    console.log(' ');
  }
  return items;
}

bubbleSort(o);

// for k, loop through 1 to n-1
// for i loop 0 to n-2
// if A[i] is greater than A[i+1]
// swap A[i] with A[i+1]




function bubbleSort(arr) {
  var wall = arr.length; 

  while (wall >= 0) {

    for (var i = 0; i < wall; i++) {
      console.log(arr);

      if (arr[i] > arr[i+1]) {
        //Swap the numbers
        var tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
      
    }
    console.log(' ');
    wall--;
  }
  return arr;
}

let arr = [7,4,8,3,1,2];

bubbleSort(arr);


var o = { 
  0: 9, 
  1: 3, 
  2: 8, 
  3: 2, 
  4: 7, 
  5: 6, 
  6: 5, 
  7: 4, 
  8: 1
}



function bubbleSort(arr) {
  for(var k = 0; k < arr.length - 1; k++){
    for (let i = k + 1; i < arr.length; i++) {
      if (arr[k] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
      }
    }
  }
  return arr;
}

var a = [9,4,6,3,7,2,1];

var sorted = bubbleSort(a);

console.log(sorted);