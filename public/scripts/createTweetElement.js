const createTweetElement = function (tweet) {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(tweet.created_at);
  const secondDate = new Date();
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  const markup = `<article class="article">
  <header class="tweetCardTop">
    <div class="leftHeader">

      <div class="leftHeader">
        <img src=${tweet.user.avatars}>
        <div class="username">${tweet.user.name}</div>
      </div>
    </div>
    <div class="rightHeader">
      <div class="handle">${tweet.user.handle}</div>
    </div>
  </header>

  <div class="tweetCardBottom">
    <span class="tweetBody">${tweet.content.text}</span>
  </div>

  <footer class="tweetFooter">
    <div class="footerLeft">
      <span>${diffDays} days ago</span>
    </div>
    <div class="footerRight">
      <span>Social</span>
    </div>
  </footer>
</article>`;

  return markup;

}

