// client.js 

jQuery(function ($) {
  $('section').hide();

  // SUBMIT_TWEETS - submits newly generated tweet to database, calls getTweets after successfull post
  $("#submitTweet").submit(function (event) {
    event.preventDefault();
    const input = $(this).serialize();

    if (input === 'text=') {
      alert('Tweet is empty! Try sharing your thoughts')
    } else if (input.length > 145) {
      alert('Too much thought sharing! Check the COLOR CODED counter')
    } else {

      // Async AJAX call
      $.ajax({
        url: "/tweets/",
        method: "POST",
        data: input
      }).done((response) =>{
        $(this).trigger("reset");
        $(".counter").text(i = 140);
        getTweets();
      })
    }
  });

  // GET TWEETS - requests tweet database entries (including newly generated tweet), calls renderTweets
  const getTweets = function () {
    $.ajax({
      url: "/tweets/",
      method: "GET",
    }).done(function (response) {
      console.log('DB:', response);
      renderTweets(response);
    })
  };

  // RENDER_TWEETS - populates tweet history container with database entries (including newly generated tweet)
  const $tweetContainer = $(".tweetHistory");
  const renderTweets = function (tweets) {
    $tweetContainer.empty();
    const $createdTweets = $(tweets.map(createTweetElement).join(" "));
    return $tweetContainer.append($createdTweets);
  };
});




