var homePage = 'https://rdp77.blogspot.com',
    maxResults = 10,
    containerId = 'random';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleArray(arr) {
    var i = arr.length, j, temp;
    if (i === 0) return false;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
function RandomRandomPosts(json) {
    var startIndex = getRandomInt(1, (json.feed.openSearch$totalResults.$t - maxResults));
    // console.log('Get the post feed start from ' + startIndex + ' until ' + (startIndex + maxResults));
    document.write('<scr' + 'ipt src="' + homePage + '/feeds/posts/summary?alt=json-in-script&orderby=updated&start-index=' + startIndex + '&max-results=' + maxResults + '&callback=randomPosts"></scr' + 'ipt>');
}
function randomPosts(json) {
    var link, ct = document.getElementById(containerId),
        entry = shuffleArray(json.feed.entry),
        skeleton = "<ul>";
    for (var i = 0, len = entry.length; i < len; i++) {
        for (var j = 0, jen = entry[i].link.length; j < jen; j++) {
            link = (entry[i].link[j].rel == "alternate") ? entry[i].link[j].href : '#';
        }
        skeleton += '<li><a href="' + link + '">' + entry[i].title.$t + '</a></li>';
    }
    ct.innerHTML = skeleton + '</ul>';
}
document.write('<scr' + 'ipt src="' + homePage + '/feeds/posts/summary?alt=json-in-script&max-results=0&callback=RandomRandomPosts"></scr' + 'ipt>');

var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].src.replace(/.*?:\/\//g , "https://cdn.staticaly.com/img/");
  };

function insertAfter(tbh,tgt) {
  var prt = tgt.parentNode;
  if (prt.lastChild == tgt) {prt.appendChild(tbh);}
  else {prt.insertBefore(tbh,tgt.nextSibling);}}
  var tgt = document.getElementById("tgtPost");
  var midAd1 = document.getElementById("middleAds1");
  var midAd2 = document.getElementById("middleAds2");
  var showAd1 = tgt.getElementsByTagName("br");
  var showAd2 = tgt.getElementsByTagName("p>");
  if (showAd1.length > 0) {insertAfter(midAd1,showAd1[2]);}
  if (showAd2.length > 0) {insertAfter(midAd1,showAd2[2]);}
  if (showAd1.length > 0) {insertAfter(midAd2,showAd1[5]);}
  if (showAd2.length > 0) {insertAfter(midAd2,showAd2[5]);};
for (var ads = document.querySelectorAll('ins.adsbygoogle'), i=0; i<ads.length; i++){
    if (ads[i]) {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
