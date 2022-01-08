function shortcut (string) {
    // Use a regular expression to remove the lowercase vowels
    return string.replaceAll(/[aeiou]/gi, '');
  }