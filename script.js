// Assignment Code
const generateBtn = document.querySelector("#generate");

//Defined all the varbiales needed before i can start to write out the functions
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

let passwordLength;
let upperCaseRule;
let numbersRule;

//Going to make my first function to determine length of password
function calculatePasswordLength(){
  //let passwordLength;
  passwordLength = prompt("Please enter the length of your password (Must be between 8 and 128 characters)");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Must be a numeric value between 8 and 128 characters");
    calculatePasswordLength();
  }else {
    alert("Your password length has been determined. Please move on to the next step");
  }
return passwordLength;
}


//Creating another function to see if the user wants uppercase letters
function dictateUpperCase() {
  let upperCaseRule = prompt("Would you like to include uppercase letters? Please type:(Yes or No)");
  if (upperCaseRule === "yes"){
    upperCaseRule = true;
    return upperCaseRule;
  } else if (upperCaseRule === "no"){
    upperCaseRule = false;
    return upperCaseRule;
  }else {
    alert("Invalid Answer! Please type:(Yes or No)")
    dictateUpperCase();
    }
    return upperCaseRule;
  }

  //Creating a function to see if the User wants numbers
  function dictateNumbers() {
    let numbersRule = prompt("Would you like to include numbers? Please type:(Yes or No)");
    if (numbersRule === "yes"){
      numbersRule = true;
      return numbersRule;
    } else if (numbersRule === "no"){
      numbersRule = false;
      return numbersRule;
    }else {
      alert("Invalid Answer! Please type:(Yes or No)")
      dictateNumbers();
      }
      return numbersRule;
    }

  
function generatePassword(){
  calculatePasswordLength();
  console.log(passwordLength);
  dictateUpperCase();
  console.log(upperCaseRule);
  dictateNumbers();
  console.log(numbersRule);
}



// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password")
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
