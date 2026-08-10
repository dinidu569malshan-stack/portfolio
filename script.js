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
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        }
      });

      // Sticky header toggle
      header.classList.toggle('sticky', window.scrollY > 100);

      // Remove menu icon toggle and navbar when clicking a link (scroll)
      menuIcon.classList.remove('fa-times');
      navbar.classList.remove('active');
    };

    // 3. Contact Form Submission handling without using alert()
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent page reload
      
      // Show custom DOM message instead of alert()
      formMessage.style.display = 'block';
      
      // Reset the form fields
      contactForm.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    });
