// Play video only when in viewport
var played = false;
var video = document.getElementsByTagName("video")[0];

function checkScroll() {
  var rect = video.getBoundingClientRect();
  let visible;
  if (window.innerWidth > 768) {
    // Desktop breakpoints
    visible =
      window.innerWidth - rect.x > 0.3 * window.innerWidth &&
      window.innerWidth - rect.x < 0.8 * window.innerWidth;
    isOutsideViewport =
      window.innerWidth - rect.x < 0 ||
      window.innerWidth - rect.x > window.innerWidth + video.offsetWidth;
  } else {
    // Mobile breakpoints
    visible =
      video.offsetHeight - rect.y > 0.3 * video.offsetHeight &&
      video.offsetHeight - rect.y < 1.6 * video.offsetHeight;
    isOutsideViewport =
      video.offsetHeight - rect.y < 0 ||
      video.offsetHeight - rect.y > 2 * video.offsetHeight;
  }
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
