function loadTweets() {
    // Add Script from Twitter
    // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
    let script = document.createElement('script');
    script.async = true;
    script.src = "https://platform.twitter.com/widgets.js";
    document.querySelector('head').appendChild(script);
    // Hide Button
    document.querySelector('#ask_show_tweets').style.display = "none";
    // Make Tweets-Div visible
    document.querySelector('#tweets_scroller').style.display = "flex";
    document.querySelector('#tweets_scroller').style.overflowX = "scroll";
    document.querySelector('#tweets_scroller').style.minWidth = "100%";
    // Append Tweets
    document.querySelector('#tweets_scroller').innerHTML = `
    <blockquote class="twitter-tweet"><p lang="de" dir="ltr">Make ÖPNV Great Again..🚃 <a href="https://t.co/Jso9WKvkCr">pic.twitter.com/Jso9WKvkCr</a></p>&mdash; Bahnbabo (@PeterWirth10) <a href="https://twitter.com/PeterWirth10/status/1622652920440266760?ref_src=twsrc%5Etfw">February 6, 2023</a></blockquote>
    <blockquote class="twitter-tweet"><p lang="de" dir="ltr">Vielen lieben Dank für dieses Bild an <a href="https://twitter.com/alex60329?ref_src=twsrc%5Etfw">@alex60329</a> .<br>Dem ist nichts hinzuzufügen. 🤩🙏🫶 <a href="https://t.co/6GWmRRxfec">pic.twitter.com/6GWmRRxfec</a></p>&mdash; Bahnbabo (@PeterWirth10) <a href="https://twitter.com/PeterWirth10/status/1622353909791457285?ref_src=twsrc%5Etfw">February 5, 2023</a></blockquote>
    <blockquote class="twitter-tweet"><p lang="de" dir="ltr">Wenn der „Spitzenkandidat“ nach der Podiumsdiskussion länger bleibt, sich das Hemd und die Krawatte von Körper reißt, um sich dann mit den jugendlichen Erstwähler*innen einer Liegestütze Challenge zu stellen.<a href="https://twitter.com/hashtag/politikkannauchchillig?src=hash&amp;ref_src=twsrc%5Etfw">#politikkannauchchillig</a> <a href="https://t.co/7f90nLVCE6">pic.twitter.com/7f90nLVCE6</a></p>&mdash; Bahnbabo (@PeterWirth10) <a href="https://twitter.com/PeterWirth10/status/1622290253800263680?ref_src=twsrc%5Etfw">February 5, 2023</a></blockquote>
    <blockquote class="twitter-tweet"><p lang="de" dir="ltr">Auf dem Weg zum Riedberg Gymnasium zur Podiumsdiskussion, meine erste Veranstaltung die ich wahrnehmen kann.<br>Und dann auch noch mit Krawatte..🤪 <a href="https://t.co/BEeqmbBrGn">pic.twitter.com/BEeqmbBrGn</a></p>&mdash; Bahnbabo (@PeterWirth10) <a href="https://twitter.com/PeterWirth10/status/1621511765292101639?ref_src=twsrc%5Etfw">February 3, 2023</a></blockquote>
    <blockquote class="twitter-tweet"><p lang="de" dir="ltr">Und dieses geniale Bild haben sie in der Kunststunde für mich gemalt.<br>Jeder der Mitbewerber*innen bekam sein eigenes Portrait.<br>Die Veranstaltung war großartig und ich bedanke mich bei allen Mitwirkenden.<br>🙏🫶🥰 <a href="https://t.co/01Xm2djqqI">pic.twitter.com/01Xm2djqqI</a></p>&mdash; Bahnbabo (@PeterWirth10) <a href="https://twitter.com/PeterWirth10/status/1621593053034123265?ref_src=twsrc%5Etfw">February 3, 2023</a></blockquote>
    `
}