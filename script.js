// Assignment Code
const generateBtn = document.querySelector("#generate");

//Defined all the varbiales needed before i can start to write out the functions
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
