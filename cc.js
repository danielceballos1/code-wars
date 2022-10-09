function countSheeps(arrayOfSheep) {
    //set count to 0
    let count = 0;
    //loop through array. If count == sheep, increment count +1
    for (let sheep of arrayOfSheep) {
      if (sheep === true) {
        count++;
      }
    }
    //return count
    return count;
  }