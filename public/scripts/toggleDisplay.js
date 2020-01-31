const toggleTweet= function() {
  var x = document.getElementById("toggleIcon");
  if (x.style.display === "none") {
    $('.newTweet').slideDown();
    $("textarea").focus();
  } else {
    // x.style.display = "none";
    $('.newTweet').slideUp();
  }
}


const underTweet = function(errorType) {
  $(".showError").text(errorType);
  $('.showError').slideDown();
}

const underTweetHide = function() {
  $('.showError').slideUp();
}

const overTweet = function(errorType) {
  $(".showError").text(errorType);
  $('.showError').slideDown();
}

