document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('nav button')
  var menu = document.querySelector('nav div')
  var menuItems = document.querySelectorAll('nav a')

  function toggleActive() {
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
  }
  toggle.addEventListener('click', toggleActive)
  menuItems.forEach(n => n.addEventListener('click', toggleActive))
})
