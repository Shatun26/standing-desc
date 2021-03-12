const swiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 500,
  centeredSlides: true,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

let video = document.querySelector(".Video video");
let cVideo = document.querySelector(".c-video");
let psevdoPlay = document.querySelector(".psevdo-play");
function togglePlayPause() {
  if (video.paused) {
    video.play();
    psevdoPlay.style.display = "none";
  } 
}

psevdoPlay.onclick = function(){
  togglePlayPause();
}
