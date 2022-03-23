function countPositivesSumNegatives(input) {
    // if input is null or empty array return []
    if (input == null || input.length == 0)
      return [];
    //set positive and negative variables
    let positive = 0;
    let negative = 0;
    //loop through array. Count positive numbers and sum neg numbers.
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    //return positive count and neg sum in array
    return [positive, negative];
}