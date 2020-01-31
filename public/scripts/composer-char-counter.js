i = 140;
// Array of key codes that will not be considered as valid input
let rejectArr = [9, 13, 16, 17, 18, 20, 91, 37, 38, 39, 40];

// Validates if key entered in tweet submission form is 'valid' 
const validInput = function (key) {
  for (let i = 0; i < rejectArr.length; i++) {
    if (rejectArr[i] === key) {
      return false;
    }
  }
  return true;
}
// Function will reject keys that are not considered as alphanumeric input (CTRL , ALT , SHIFT , etc.)
$(document).ready(function () {
  $("textarea").on('keydown', function (key) {
    if (key.keyCode == 8) {
      if (i < 140) {
        $(".counter").text(i += 1);
        if(i > 0) {
          $(".counter").removeClass("colorRed")
        }
      }
      
    } else {
      let status = validInput(key.keyCode);
      if (status) {
        $(".counter").text(i -= 1);
        if(i < 0) {
          $(".counter").addClass("colorRed")
        }
      } 
    }
  })
});



