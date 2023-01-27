const toggleb = document.getElementsByClassName('toggle-b')[0]
const navlinks = document.getElementsByClassName('nav-links')[0]

toggleb.addEventListener('click', () => {
navlinks.classList.toggle('active')
toggleb.classList.toggle('active')
})