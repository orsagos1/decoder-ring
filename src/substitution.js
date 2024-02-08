// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  function substitution(input, alphabet, encode = true) {
    // If there is no alphabet, the alphabet is less than 26, and if there's repeating letters, return false
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26)
      return false;
    // Assign alphabet to variable
    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz"; 
    const message = [];
    // Encoding loop:
    if (encode) {
      for (let i = 0; i < 26; i++) {
        // Match each letter from alphabet to originalAlphabet using index
        message[originalAlphabet[i]] = alphabet[i];
      }
      // Decoding loop:
    } else {
      for (let i = 0; i < 26; i++) {
        // Match each letter via index from originalAlphabet to alphabet
        message[alphabet[i]] = originalAlphabet[i];
      }
    }
    // Creating variable for output result, split, and convert to array
    const result = input.split("").map((letter) => {
      // If there is a space, keep it
      if (letter === " ") return " ";
      return message[letter];
    });
    // Join everything back together and return result
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };