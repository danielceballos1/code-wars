function addLength(str) {
// Split the string into an array of words
  const words = str.split(' ');

  // Map the array of words to an array of strings with the length of each word added to the end
  return words.map(word => `${word} ${word.length}`);
}