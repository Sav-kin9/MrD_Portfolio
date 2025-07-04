// TYPING TEXT


const text = "My Portfolio";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("dynamic-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Speed control
  }
}
typeWriter();


// Scroll-triggered fade-in and slide-in
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.fade-in, .slide-in').forEach(el => observer.observe(el));

    // Current Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();


    // Re-run animation when elements come back into view
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in');

  const reObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Re-trigger effect on scroll back
      }
    });
  }, { threshold: 0.5 });

  animatedElements.forEach(el => reObserver.observe(el));


  // Mobile menu toggle
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = `
  <div class="toggle-icon">
    <span class="dot"></span>
    <span class="dash"></span>
    <span class="dot"></span>
  </div>
`;
document.body.prepend(menuToggle);

const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
const modeIcon = document.getElementById('modeIcon');
const body = document.body;

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  modeIcon.src = isDarkMode ? 'images/sun-icon-light.svg' : 'images/moon-icon-light.svg';
  localStorage.setItem('darkMode', isDarkMode);
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  modeIcon.src = 'images/sun-icon-light.svg';
}
