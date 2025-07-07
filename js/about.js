// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const sideNav = document.getElementById('sideNav');
const menuBackdrop = document.getElementById('menuBackdrop');

menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

menuBackdrop.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
});

// Theme Toggle
const darkToggle = document.getElementById('darkToggle');
const themeIcon = document.getElementById('themeIcon');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeIcon.src = isDark ? 'images/sun-icon-dark.svg' : 'images/moon-icon-light.svg';
  localStorage.setItem('darkMode', isDark);
});

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  themeIcon.src = 'images/sun-icon-dark.svg';
}

// Typing Effect
const typingText = document.getElementById('typing-text');
const text = "Mr. D | BUILT WITH VISION";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  } else {
    typingText.innerHTML += '<span class="blinking-cursor">|</span>';
  }
}

// Scroll Animations
const animateOnScroll = () => {
  const sections = document.querySelectorAll('.about-section');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.2;
    
    if (sectionTop < triggerPoint) {
      section.classList.add('visible');
    }
  });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
});

// Blinking cursor animation
const style = document.createElement('style');
style.textContent = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .blinking-cursor {
    animation: blink 1s step-end infinite;
  }
`;
document.head.appendChild(style);