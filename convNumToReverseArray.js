function digitize(n) {
    //convert num to string
    //split string
    //reverse order of array
    //loop through array and convert string to num
    return n.toString().split('').reverse().map(e=>Number(e))
   }