script.js

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission (demo)
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent!');
});


---