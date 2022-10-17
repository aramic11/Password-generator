// Assignment Code
const generateBtn = document.querySelector("#generate");

//Defined all the varbiales needed before i can start to write out the functions
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

let passwordLength = "";
let upperCaseRule = true;
let lowerCaseRule = true;
let numbersRule = true;
let specialsRule = true;
let selections;

//Going to make my first function to determine length of password
function calculatePasswordLength(){
  //let passwordLength;
  passwordLength = prompt("Please enter the length of your password (Must be between 8 and 128 characters)");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Must be a numeric value between 8 and 128 characters");
    calculatePasswordLength();
  }else {
    alert("Your password length has been determined. Please move on to the next few steps");
  }
return passwordLength;
}
console.log(passwordLength);


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
    console.log(upperCaseRule);

//Creating another function to see if the user wants lowercase letters
function dictateLowerCase() {
  let lowerCaseRule = prompt("Would you like to include lowercase letters? Please type:(Yes or No)");
  if (lowerCaseRule === "yes"){
    lowerCaseRule = true;
    return lowerCaseRule;
  } else if (lowerCaseRule === "no"){
    lowerCaseRule = false;
    return lowerCaseRule;
  }else {
    alert("Invalid Answer! Please type:(Yes or No)")
    dictateLowerCase();
    }
    return lowerCaseRule;
  }
  console.log(lowerCaseRule);    

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
    console.log(numbersRule);

    //Creating a function to see if the User wants special characters
  function dictateSpecial() {
    let specialsRule = prompt("Would you like to include special characters? Please type:(Yes or No)");
    if (specialsRule === "yes"){
      specialsRule == true;
      return specialsRule;
    } else if (specialsRule === "no"){
      specialsRule == false;
      return specialsRule;
    }else {
      alert("Invalid Answer! Please type:(Yes or No)")
      dictateSpecial();
      }
      return specialsRule;
    }
    console.log(specialsRule);

//This is to call the functions
function generatePassword(){
  calculatePasswordLength();
  dictateUpperCase();
  dictateLowerCase();
  dictateNumbers();
  dictateSpecial();
  

let password = "";
let selections = "";

//This is to identify what the user selected yes "True" to and then add the appropriate variables to the selections before generating a password
if (lowerCaseRule){
  selections += lowerCase;
}
if (upperCaseRule){
  selections += upperCase;
}
if (numbersRule){
  selections += numbers;
}
if (specialsRule){
  selections += specialCharacters;
}

//This is a for loop to iterate throughout the password length which is determined at the beginning and then randomizing the selections
for(let i = 0; i < passwordLength; i++) {
  password += selections.charAt(Math.floor(Math.random() * selections.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password")
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
