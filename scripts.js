"use strict";
// variables
let videoCover = document.querySelector(".bg-overlay");
let video = document.querySelector(".teaser-video");
let about = document.querySelector(".about");
let mainTitle = document.querySelector(".main-title");
let videoControls = document.querySelector(".video-controls");
let videoPlayBtn = document.querySelector(".play-btn");

window.addEventListener("scroll", function () {
  let ScrollText = scrollY / 10 + 1;
  // video show/hide
  if (scrollY > 400) {
    videoCover.classList.add("show");
  } else if (scrollY < 400) {
    videoCover.classList.remove("show");
  }

  if (scrollY > about.offsetTop || scrollY < 400) {
    video.pause();
  } else if (scrollY < about.offsetTop) {
    video.play();
  }
  // scroll main title on scroll
  mainTitle.style.transform = "scale(" + ScrollText + ")";
});

videoCover.addEventListener("click", () => {
  togglePlay();
});

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
    videoPlayBtn.style.display = "none";
  } else {
    video.pause();
    videoPlayBtn.style.display = "block";
  }
}
