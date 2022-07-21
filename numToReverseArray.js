function digitize(n) {
    return n.toString().split('').map(num=> Number(num)).reverse()
  }
  
  //convert number to a string
  //split the string into an array and use map method to convert values to a number
  //reverse numbers in array
  