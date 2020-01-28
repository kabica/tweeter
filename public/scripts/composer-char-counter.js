i = 140;
let rejectArr = [9, 13, 16, 17, 18, 20, 91, 37, 38, 39, 40];

const validInput = function (key) {
  for (let i = 0; i < rejectArr.length; i++) {
    if (rejectArr[i] === key) {
      return false;
    }
  }
  return true;
}

$(document).ready(function () {
  // --- our code goes here ---
  $("textarea").on('keydown', function (key) {
    if (key.keyCode == 8) {
      if (i < 140) {
        $(".counter").text(i += 1);
      }
    } else {
      let status = validInput(key.keyCode);
      if (status) {
        $(".counter").text(i -= 1);
      }
    }
  })
});
