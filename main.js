const slider = document.querySelector('.items')

let isDown = false

let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true
  slider.classList.add('active')
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
  console.log(scrollLeft)
  console.log(startX)
})

slider.addEventListener('mouseleave', (e) => {
  isDown = false
  slider.classList.remove('active')

})

slider.addEventListener('mouseup', (e) => {
  isDown = false
  slider.classList.remove('active')

})

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return
  console.log(isDown)
  console.log("Do Work")
  console.log(startX)
})