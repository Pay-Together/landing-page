// Play video only when in viewport
var played = false;

function checkScroll() {
  var video = document.getElementsByTagName("video")[0];
  var rect = video.getBoundingClientRect();
  var visible = window.innerWidth - rect.x > 0.3 * window.innerWidth;
  var isOutsideViewport =
    window.innerWidth - rect.x < 0 ||
    window.innerWidth - rect.x > window.innerWidth;

  if (visible && !played) {
    video.play();
    played = true;
  }

  if (isOutsideViewport && played) {
    played = false;
    video.currentTime = 0;
  }
}

window.addEventListener("scroll", checkScroll, false);
window.addEventListener("resize", checkScroll, false);
