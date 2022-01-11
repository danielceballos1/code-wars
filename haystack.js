function findNeedle(haystack) {
    // Find the index of the needle in the haystack
    const needleIndex = haystack.indexOf('needle');
  
    // Return the message indicating the position of the needle
    return `found the needle at position ${needleIndex}`;
  }