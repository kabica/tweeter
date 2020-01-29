/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const $input = $(this).find("input, select, button, textarea");


jQuery(function ($) {

  // SUBMIT_TWEETS - submits newly generated tweet to database, calls getTweets after successfull post
  $("#submitTweet").submit(function (event) {
    event.preventDefault();
    const input = $(this).serialize();
    console.log(input);

    $.ajax({
      url: "/tweets/",
      method: "POST",
      data: input
    }).done(function (response) {
      console.log('RESPONSE:', response);
      getTweets();
    })

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



