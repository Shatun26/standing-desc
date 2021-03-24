document.querySelector('.burger').addEventListener('click', ()=>{
  document.querySelector('.burger').classList.toggle('active')
  document.querySelector('.header_icons').classList.toggle('active')
  document.querySelector('.logo').classList.toggle('active')

  document.querySelector('.header_icons').classList.toggle('disable')

})