const slider = document.querySelector('.items')

let isDown = false

let startX;
let scrollLeft;

function Move(e) {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - slider.offsetLeft
  const walk = x - startX
  slider.scrollLeft = scrollLeft - walk
}

function MouseDown(e) {
  isDown = true
  slider.classList.add('active')
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
}

function MouseLeave(e) {
  isDown = false
  slider.classList.remove('active')
}

function MouseUp(e) {
  isDown = false
  slider.classList.remove('active')
}

slider.addEventListener('mousemove', Move)
slider.addEventListener('mousedown', MouseDown)
slider.addEventListener('mouseleave', MouseLeave)
slider.addEventListener('mouseup', MouseUp)

