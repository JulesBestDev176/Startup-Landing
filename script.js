var playVideo = document.getElementById("playVideo");
var imagevideo = document.getElementById("imagevideo");
var maVideo = document.getElementById("maVideo");
var youtube = document.getElementById("youtube");
const navbar = document.querySelector(".navbar");
const close = document.querySelector(".close");
const panel = document.querySelector(".panel");
const open = document.getElementById("open");
// SCROLL DEBUT

window.addEventListener("scroll", function () {
  if (window.scrollY < 70) {
    navbar.classList.remove("scrolled");
    navbar.classList.remove("transparent");
  } else if (window.scrollY >= 70 && window.scrollY <= 150) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
    navbar.classList.add("scrolled");
  }
});
// SCROLL FIN

// PLAY VIDEO DEBUT
playVideo.addEventListener("click", (e) => {
  e.preventDefault();
  imagevideo.style.display = "none";
  playVideo.style.display = "none";

  maVideo.style.display = "block";
  youtube.src += "&autoplay=1";
});
// PLAY VIDEO FIN

// OPEN SIDEBAR DEBUT
open.addEventListener("click", (e) => {
  e.preventDefault();
  panel.classList.remove("invisible");
});
// OPEN SIDEBAR FIN

// CLOSE SIDEBAR DEBUT
close.addEventListener("click", (e) => {
  e.preventDefault();
  panel.classList.add("invisible");
});
// CLOSE SIDEBAR DEBUT
