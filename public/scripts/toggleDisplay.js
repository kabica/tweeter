// toggleDisplay.js

// Compose new tweet section will toggle visibility
const toggleTweet= function() {
  var x = document.getElementById("toggleIcon");
  if (x.style.display === "none") {
    $('.newTweet').slideDown();
    $("textarea").focus();
  } else {
    $('.newTweet').slideUp();
  }
}
// Error for empty tweet attempts
const underTweet = function(errorType) {
  $(".showError").text(errorType);
  $('.showError').slideDown();
}
const underTweetHide = function() {
  $('.showError').slideUp();
}
// Error for over-char limit tweet attempts
const overTweet = function(errorType) {
  $(".showError").text(errorType);
  $('.showError').slideDown();
}

