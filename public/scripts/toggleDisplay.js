const toggleTweet= function() {
  var x = document.getElementById("toggleIcon");
  if (x.style.display === "none") {
    x.style.display = "block";
    $("textarea").focus();
  } else {
    x.style.display = "none";
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

