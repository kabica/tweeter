// compose-char-counter.js
const maxLength = 140;
$(document).ready(function () {
  $("textarea").on('input', function(){
    let currentLength = $(this).val().length;
    let remaining = maxLength - currentLength
    $(".counter").text(remaining);

    if(remaining < 0) {
      $(".counter").addClass("colorRed")
    }else{
      $(".counter").removeClass("colorRed")
    }
})
});



