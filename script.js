const swiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 500,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

let video = document.querySelector(".Video video");
let cVideo = document.querySelector('.c-video')
let psevdoPlay = document.querySelector(".psevdo-play");
function togglePlayPause() {
  if (video.paused) {
    video.play();
    psevdoPlay.style.opacity = 0;
  } else {
    video.pause();
    psevdoPlay.style.opacity = 1;
  }
}
cVideo.onclick = function () {
  togglePlayPause();
};
