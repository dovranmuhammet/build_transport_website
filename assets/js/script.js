'use strict'

/**
 * navbar toggle
 */

const navbar = document.querySelector('[data-navbar]')
const navToggler = document.querySelectorAll('[data-nav-toggler]')
const navLinks = document.querySelectorAll('[data-nav-link]')
const overlay = document.querySelector('[data-overlay]')

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener('click', function () {
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
  })
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    navbar.classList.remove('active')
    overlay.classList.remove('active')
  })
}
