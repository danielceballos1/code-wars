function countBy(x, n) {
    // Create an empty array that will hold the multiples of x
    var z = []
    // Iterate over the integers from 1 to n
    for (var i = 1; i <= n; i++) {
      // Calculate the multiple of x by the loop variable i
      var multiple = x * i
      // Push the multiple to the z array
      z.push(multiple);
    }
    // Return the z array, which holds all of the multiples of x from 1 to n
    return z
  }
  