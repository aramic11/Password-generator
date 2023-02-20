// Assignment Code
const generateBtn = document.querySelector("#generate");

//Defined all the variables needed before writing the functions
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

let passwordLength;
let upperCaseRule;
let lowerCaseRule;
let numbersRule;
let specialsRule;

//Function to determine password length
function calculatePasswordLength() {
  passwordLength = prompt("Please enter the length of your password (Must be between 8 and 128 characters)");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Must be a numeric value between 8 and 128 characters");
    calculatePasswordLength();
  } else {
    alert("Your password length has been determined. Please move on to the next few steps");
  }
};

//Functions to see if the user wants to include uppercase, lowercase, numbers or special characters
function dictateUpperCase() {
  upperCaseRule = confirm("Would you like to include uppercase letters?");
};

function dictateLowerCase() {
  lowerCaseRule = confirm("Would you like to include lowercase letters?");
};

function dictateNumbers() {
  numbersRule = confirm("Would you like to include numbers?");
};

function dictateSpecial() {
  specialsRule = confirm("Would you like to include special characters?");
};

//Function to generate the password
function generatePassword() {
  calculatePasswordLength();
  dictateUpperCase();
  dictateLowerCase();
  dictateNumbers();
  dictateSpecial();

  let password = "";
  let selections = "";

  if (lowerCaseRule) {
    selections += lowerCase;
  }
  if (upperCaseRule) {
    selections += upperCase;
  }
  if (numbersRule) {
    selections += numbers;
  }
  if (specialsRule) {
    selections += specialCharacters;
  }

  for (let i = 0; i < passwordLength; i++) {
    password += selections.charAt(Math.floor(Math.random() * selections.length));
  }

  return password;
};

//Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password")
  passwordText.value = password;
};

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

