// Assignment Code
const generateBtn = document.querySelector("#generate");

//Defined all the varbiales needed before i can start to write out the functions
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

//Going to make my first function to determine length of password
function calculatePasswordLength(){
  let passwordLength;
  passwordLength = prompt("Please enter the length of your password (Must be between 8 and 128 characters)");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Must be a numeric value between 8 and 128 characters");
    calculatePasswordLength();
  }else {
    alert("Your password length has been determined. Please move on to the next step");
  }
return passwordLength;
}

function generatePassword(){
  calculatePasswordLength();
  console.log(passwordLength);
}



// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password")
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
