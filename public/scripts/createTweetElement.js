// ESCAPE XSS INPUT  
const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// GENERATE TIME STAMP FOR EACH TWEET 
const getTimeStamp = function (tweetTime) {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(tweetTime);
  const secondDate = new Date();
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}

// XSS AVOIDANCE + MARKUP POPULATING
const createTweetElement = function (tweet) {
  const safeHTML = `<p>${escape(tweet.content.text)}</p>`;
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
    <span class="tweetBody">${safeHTML}</span>
  </div>

  <footer class="tweetFooter">
    <div class="footerLeft">
      <span>${getTimeStamp(tweet.created_at)} days ago</span>
    </div>
    <div class="footerRight">
      <span>Social</span>
    </div>
  </footer>
</article> `;

  return markup;
}
