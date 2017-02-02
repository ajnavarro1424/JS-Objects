var passwordResponses = {
  notValid: false,
  valid: true,
  isValid: "The password is valid.",
  hasCharacter: "The password does not contain a required character.",
  hasLength:"The password does not meet the minimum length requirement.",
  isPass: "The password you chose cannot be 'password'.",
  oneLowerUpper:"Please include both an uppercase and lowercase letter in your password.",
  hasNumber: "The password does not contain a number.",
  sameCheck: "The password and the user id are the same."
};
var userIdResponses = {
  notValid: false,
  valid: true,
  isValid: "The User ID is valid.",
  hasCharacter: "The User ID does not contain a required character.",
  hasLength: "The User ID does not meet the minimum length requirement.",
}


function userCheck(userId) {
  var userCrit =  hasLength(userId)  && hasCharacter(userId);
  return userCrit;
}

function hasLength(userId) {
  var hasLength = userId.length >= 6;
  if(hasLength){
    return userIdResponses.valid;
  }
  else{
    return userIdResponses.notValid;
  }
}

function hasCharacter(userId) {
  var hasChar = !userId.includes("!") && !userId.includes("#") && !userId.includes("$");
  if (hasChar) {
    return userIdResponses.valid;
  } else {
    return userIdResponses.notValid;
  }
}

function hasLength(userId) {
  var hasLength = userIdResponses.valid;
  if (hasLength) {
    return userIdResponses.valid;
  } else {
    return userIdResponses.notValid;
  }
}

function checkPass(userPass) {
  var passCrit = hasCharacter(userPass) && hasLength(userPass) && isPass(userPass) && hasNumber(userPass) && oneLowerUpper(userPass);
  return passCrit;
}

function hasCharacter(userPass){
  var hasChar = (userPass.includes("!") || userPass.includes("#") || userPass.includes("$"));
  if (hasChar) {
    return passwordResponses.valid;
  }
  else {
    return passwordResponses.notValid;
  }
}

function hasLength(userPass) {
  var hasLength = userPass.length >= 6;
  if (hasLength) {
    return passwordResponses.valid;
  } else {
    return passwordResponses.notValid;
  }
}

function isPass(userPass) {
  var isPass = !(userPass === "password" || userPass === "Password" || userPass === "PASSWORD");
  if (isPass) {
    return passwordResponses.valid;
  } else {
    return passwordResponses.notValid;
  }
}

function hasNumber(userPass) {
  var hasDigit;
  var hasDigitAcc = 0;
  for(var i = 0; i <=9; i++)
  {
    hasDigit = userPass.includes(i);
    hasDigitAcc += hasDigit;
  }

  if (hasDigitAcc > 0) {
    return passwordResponses.valid;
  }
  else {
    return passwordResponses.notValid;
  }
}


function oneLowerUpper(userPass) {
  var userPassUpper = userPass.toUpperCase();
  var userPassLower = userPass.toLowerCase();

  if (userPass < userPassLower && userPass > userPassUpper){
    return passwordResponses.valid;
  }
  else {
    return passwordResponses.notValid;
  }
}


function sameCheck(userId, userPass) {
  if (!(userId === userPass)) {
    return passwordResponses.valid;
  }
  else {
    return passwordResponses.notValid;
  }

}
function userCred() {
  var userId = prompt("Enter a user name: ");
  var userPass = prompt("Enter a user password: ");

  var checkFinal = sameCheck(userId, userPass) && userCheck(userId) && checkPass(userPass);


  if (checkFinal)
  {
    alert(userIdResponses.isValid + "\n" + passwordResponses.isValid);
  }
  else {
      console.log("User Credentials were not valid for the following:");
      if (!sameCheck(userId, userPass)) {
        console.log(passwordResponses.sameCheck);
      }
      if (!hasLength(userId)) {
        console.log(userIdResponses.hasLength);
      }
      if (!hasCharacter(userId)) {
        console.log(userIdResponses.hasCharacter);
      }
      if (!hasCharacter(userPass)) {
          console.log(passwordResponses.hasCharacter);
        }
      if (!hasLength(userPass)) {
          console.log(passwordResponses.hasLength);
        }
      if (!isPass(userPass)) {
          console.log(passwordResponses.isPass);
        }
      if (!hasNumber(userPass)) {
          console.log(passwordResponses.hasNumber);
        }
      if (!oneLowerUpper(userPass)) {
          console.log(passwordResponses.oneLowerUpper);
        }
  }

}
