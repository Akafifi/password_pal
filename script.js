// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}
function generatePassword(){
  // Password prompts
  var passLength = prompt("Enter a password length: " )
  if(passLength < 8 || passLength > 128){
    alert("ERROR!")
    return "Password length does not meet constraints."
  }
  var lowerCase = prompt("Lowercase? Y/N")
  
  var upperCase = prompt("Uppercase? Y/N")

  var specialChar = prompt("Special characters? Y/N?")

  var specialString = ""
  // Math.random(lowRange, highRange)
  if (specialChar === 'Y') {
    var lowRange = 33
  } else {
    var lowRange = 48
  }
// Special character range (referencing ascii table)
  var highRange = 0
  if (upperCase.toUpperCase() === 'Y' && lowerCase.toUpperCase() === 'Y') {
    highRange = 122
  } 
  else if (upperCase.toUpperCase() === 'Y' && lowerCase.toUpperCase() === 'N'){
    highRange = 90
  }
  else if(upperCase.toUpperCase() === 'N' && lowerCase.toUpperCase () === 'N'){
    highRange = 57
  }
  else{
    highRange == 122
  }

  for(var i=0; i < passLength; i++){
    if(upperCase.toUpperCase() === 'N' && lowerCase.toUpperCase() === 'Y'){
      var randomNum = getRandomNumber(lowRange, 64, 91, 122)
    }
    else{
      var randomNum = Math.random() * (highRange - lowRange) + lowRange
    }
    specialString = specialString + String.fromCharCode(randomNum)
  }
  return specialString
}

  // function to call random numbers

function getRandomNumber(min1, max1, min2, max2) {
  var random = Math.floor(Math.random() * 2);
  if (random === 0) {
    return Math.floor(Math.random() * (max1 - min1 + 1) + min1);
  } else {
    return Math.floor(Math.random() * (max2 - min2 + 1) + min2);
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);