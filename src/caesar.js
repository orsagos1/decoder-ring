// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    // Make sure the shift is a valid input or return false
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    // Invert the shift if you are decoding
    if (!encode) shift *= -1;
    // Make sure the input is all lowercase
    let inputMessage = input.toLowerCase();
    // Create an empty string to store the converted message
    let convertedMessage = "";

    // Loop through the input message
    for (let i = 0; i < inputMessage.length; i++) {
      let letter = inputMessage[i];
      // If it's a letter, get its code and add the shift number
      if (letter.match(/[a-z]/)) {
        let code = inputMessage.charCodeAt(i) + shift;
        if (code > 122) { // If the code is over 122(z) it will subtract 26 to get it back to 97(a)
          code = code - 26;
        }
        if (code < 97) { // If the code is less than 97(a) it will add 26 to get it back to 122(z)
          code = code + 26;
        }
        // Get the letter from that code
        let newLetter = String.fromCharCode(code);
        // Add it to the converted message
        convertedMessage += newLetter;
      } else {
        // If the letter is already in range, add it to the converted message
        convertedMessage += letter;
      }
    }
    // Return the converted message
    return convertedMessage;
  }
  return {
    caesar,
  };
})();
   
module.exports = { caesar: caesarModule.caesar };