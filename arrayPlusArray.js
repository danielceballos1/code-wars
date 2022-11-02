
 function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur, 0);
  }
  
  //concat() function creates a new array that consists of the elements of arr1 and arr2.
  //reduce() function sums the elements of the concatenated array.