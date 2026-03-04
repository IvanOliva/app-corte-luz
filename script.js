document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navIcon = navToggle.querySelector('i');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        if (navMenu.classList.contains('show')) {
            navIcon.classList.remove('fa-bars');
            navIcon.classList.add('fa-xmark');
        } else {
            navIcon.classList.remove('fa-xmark');
            navIcon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            navIcon.classList.remove('fa-xmark');
            navIcon.classList.add('fa-bars');
        });
    });

    // Change Header Style on Scroll
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Link Highlighting on Scroll
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Form submission styling (basic validation visual feedback)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // Un-comment e.preventDefault() if you want to test without actually sending via formspree
            // e.preventDefault();

            const btn = this.querySelector('.submit-btn');
            const originalText = btn.innerHTML;

            // Visual feedback
            btn.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin"></i>';
            btn.style.opacity = '0.8';

            // Revert after 3s (In real usage Formspree redirects normally)
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                // this.reset();
            }, 3000);
        });
    }
});
