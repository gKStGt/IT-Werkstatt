// Smooth Scroll für Anker-Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Kontakt-CTA Button hervorheben nach 5 Sekunden
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const cta = document.querySelector('a[href="kontakt.html"]');
    if (cta) {
      cta.style.backgroundColor = '#28a745';
      cta.style.transition = 'background-color 0.5s ease';
    }
  }, 5000);

  // Dark Mode Toggle Logic
  const toggleButtons = document.querySelectorAll('.dark-toggle-btn');
  const indicators = document.querySelectorAll('.dark-mode-indicator');

  // Initialize state from localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  updateIndicators();

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
      updateIndicators();
    });
  });

  function updateIndicators() {
    document.querySelectorAll('.dark-mode-indicator').forEach(indicator => {
      if (document.body.classList.contains('dark-mode')) {
        indicator.style.backgroundColor = '#4caf50'; // green light
        indicator.style.borderColor = '#4caf50';
      } else {
        indicator.style.backgroundColor = '#ccc'; // gray light
        indicator.style.borderColor = '#999';
      }
    });
  }
});
