// Smooth scroll effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Show alert when CTA buttons are clicked
const ctaButtons = document.querySelectorAll('.cta-btn');

ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert("Thank you for your interest! Our team will contact you soon.");
  });
});

// Fade-in sections while scrolling
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('show');
    }
  });
});

// Dark mode toggle
const darkModeBtn = document.getElementById('darkModeBtn');

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      darkModeBtn.innerText = "Light Mode";
    } else {
      darkModeBtn.innerText = "Dark Mode";
    }
  });
}
