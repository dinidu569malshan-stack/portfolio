// 1. Mobile menu toggle logic
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};


// 2. Scroll active links & Sticky Header logic
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      let activeLink = document.querySelector(
        'header nav a[href="#' + id + '"]'
      );

      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });


  // Sticky header toggle
  header.classList.toggle('sticky', window.scrollY > 100);


  // Close mobile menu while scrolling
  menuIcon.classList.remove('fa-times');
  navbar.classList.remove('active');
};


// 3. Close mobile menu when a navigation link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
  });
});