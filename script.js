var playVideo = document.getElementById("playVideo");
var imagevideo = document.getElementById("imagevideo");
var maVideo = document.getElementById("maVideo");
var youtube = document.getElementById("youtube");
const navbar = document.querySelector(".navbar");
const close = document.querySelector(".close");
const panel = document.querySelector(".panel");
const open = document.getElementById("open");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const cards = document.querySelectorAll(".nouvelles .slider .centre .card");

let currentIndex = 0;
const cardWidth = 365;
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

// CAROUSSEL DEBUT
nextButton.addEventListener("click", () => {
  if (currentIndex < cards.length - 3) {
    currentIndex++;
    console.log(currentIndex);
    updateCardsPosition();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > -(cards.length - 1)) {
    currentIndex--;
    console.log(currentIndex);
    updateCardsPosition();
  }
});

function updateCardsPosition() {
  const offset = currentIndex * cardWidth;

  cards.forEach((card) => {
    card.style.transform = `translateX(${offset}px)`;
    card.style.transition = "transform 0.3s ease-in-out";
  });
  // Animation de transition
}

// CAROUSSEL FIN
