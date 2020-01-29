const toggleTweet= function() {
  var x = document.getElementById("toggleIcon");
  if (x.style.display === "none") {
    x.style.display = "block";
    $("textarea").focus();
  } else {
    x.style.display = "none";
  }
}