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
    <blockquote class="twitter-tweet"><p lang="de" dir="ltr">Eine sehr positive Bewertung meiner Wahlplakate, auch wenn es nur wenige sind..<br>Doch solche Wahlplakate hatte Frankfurt noch nicht.<br>Plakate können auch chillig sein..<a href="https://t.co/tfa2bd9IDu">https://t.co/tfa2bd9IDu</a> 🤪</p>&mdash; Bahnbabo (@PeterWirth10) <a href="https://twitter.com/PeterWirth10/status/1629228850981879810?ref_src=twsrc%5Etfw">February 24, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
    <blockquote class="twitter-tweet"><p lang="de" dir="ltr">Diesen interessanten Aufkleber habe ich auf dem Campus Westend entdeckt nachdem ich in einem Netzwerk darauf aufmerksam gemacht wurde.<br>Den QR-Code kann man scannen und einiges in Erfahrung bringen.<br>Ich danke den unbekannten Unterstützer*innen und freue mich über ihre Kreativität. <a href="https://t.co/YNWwqlYHVC">pic.twitter.com/YNWwqlYHVC</a></p>&mdash; Bahnbabo (@PeterWirth10) <a href="https://twitter.com/PeterWirth10/status/1629268037286215681?ref_src=twsrc%5Etfw">February 24, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
    <blockquote class="twitter-tweet"><p lang="de" dir="ltr">Hallo liebe Freunde,<br>ich kann nun auch eine Webseite anbieten und bin sehr glücklich euch mit Hilfe zweier fantastischer jungen Menschen dieses Projekt vorstellen zu können.<br>Vielen Spaß beim durchstöbern.<a href="https://t.co/oyBgyeNsWg">https://t.co/oyBgyeNsWg</a></p>&mdash; Bahnbabo (@PeterWirth10) <a href="https://twitter.com/PeterWirth10/status/1628140183601221653?ref_src=twsrc%5Etfw">February 21, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
    <blockquote class="twitter-tweet"><p lang="de" dir="ltr">Make ÖPNV Great Again..🚃 <a href="https://t.co/Jso9WKvkCr">pic.twitter.com/Jso9WKvkCr</a></p>&mdash; Bahnbabo (@PeterWirth10) <a href="https://twitter.com/PeterWirth10/status/1622652920440266760?ref_src=twsrc%5Etfw">February 6, 2023</a></blockquote>
    <blockquote class="twitter-tweet"><p lang="de" dir="ltr">Wenn der „Spitzenkandidat“ nach der Podiumsdiskussion länger bleibt, sich das Hemd und die Krawatte von Körper reißt, um sich dann mit den jugendlichen Erstwähler*innen einer Liegestütze Challenge zu stellen.<a href="https://twitter.com/hashtag/politikkannauchchillig?src=hash&amp;ref_src=twsrc%5Etfw">#politikkannauchchillig</a> <a href="https://t.co/7f90nLVCE6">pic.twitter.com/7f90nLVCE6</a></p>&mdash; Bahnbabo (@PeterWirth10) <a href="https://twitter.com/PeterWirth10/status/1622290253800263680?ref_src=twsrc%5Etfw">February 5, 2023</a></blockquote>
    `
}