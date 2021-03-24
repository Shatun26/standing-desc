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
console.log(123123);
document.querySelector('.burger').addEventListener('click', ()=>{
  console.log(212312);
  document.querySelector('.burger').classList.toggle('active')
  document.querySelector('.header_icons').classList.toggle('active')
  document.querySelector('.logo').classList.toggle('active')

  document.querySelector('.header_icons').classList.toggle('disable')

})