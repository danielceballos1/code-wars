function basicOp(operation, value1, value2){
    //function checks to see if operation is equal to string operation
    //if so, return value 1 operation value 2
   if (operation === '+') return value1 + value2;
   if (operation === '-') return value1 - value2;
   if (operation === '/') return value1 / value2;
   if (operation === '*') return value1 * value2;
  }