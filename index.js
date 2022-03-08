const hamburger = document.getElementsByClassName('hamburger')[0]
const navbarlinks = document.getElementsByClassName('nav-bar-links')[0]

hamburger.addEventListener('click', () => {
  navbarlinks.classList.toggle('active')
})
