function findAverage(array) {
    //if array is empty return 0
    if (array == '') {return 0}
    // else use reduce method to sum of the values in array and divide by array length
    return array.reduce((total,curr)=> total+curr,0)/array.length
  }