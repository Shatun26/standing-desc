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
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});
