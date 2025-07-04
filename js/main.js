    // TYPING EFFECT

// Typing animation
// Typing animation for hero heading
const text = "Hello, I'm Saviour Uwem Nkanga";
const typingText = document.getElementById("typing-text");
let index = 0;

function type() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 60); // speed in ms
  }
}
document.addEventListener("DOMContentLoaded", type);

// TILT EFFECT

const tiltContainer = document.getElementById("tilt-container");
const tiltImage = document.getElementById("tilt-image");

tiltContainer.addEventListener("mousemove", (e) => {
  const bounds = tiltContainer.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;
  const deltaX = (e.clientX - centerX) / 20;
  const deltaY = (e.clientY - centerY) / 20;

  tiltImage.style.transform = `rotateY(${deltaX}deg) rotateX(${ -deltaY }deg)`;
});

tiltContainer.addEventListener("mouseleave", () => {
  tiltImage.style.transform = "rotateY(0deg) rotateX(0deg)";
});

// // ANIMATION TILT EFFECT

// // const menuToggle = document.getElementById("menuToggle");
// //   const sideNav = document.getElementById("sideNav");
  const menuBackdrop = document.getElementById("menuBackdrop");
  // //   const body = document.body;

//   // Toggle menu
//   menuToggle.addEventListener("click", () => {
  //     body.classList.toggle("menu-open");
  //   });
  
  //   // Close menu on backdrop click
  menuBackdrop.addEventListener("click", () => {
    body.classList.remove("menu-open");
  });

  // Optional: Close when a link inside menu is clicked
  document.querySelectorAll(".side-nav a").forEach(link => {
    link.addEventListener("click", () => {
      body.classList.remove("menu-open");
    });
  });

// SIDE MENU JS CODE

  const menuToggle = document.getElementById("menuToggle");
  const sideNav = document.getElementById("sideNav");
  const body = document.body;

  menuToggle.addEventListener("click", () => {
    body.classList.toggle("menu-open");
  });

  document.querySelectorAll(".side-nav a").forEach(link => {
  link.addEventListener("click", () => {
    body.classList.remove("menu-open");
  });
});

// FADE IN SCROLL JS EFFECT

// Scroll-based fade-in animation
const faders = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  faders.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// SCROLL TRIGGERED NAVBAR EFFECT

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ========DARK MODE TOGGLE BUTTON========

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeIconMobile = document.getElementById('themeIconMobile');

function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.src = 'images/sun-icon-dark.svg';
    if (themeIconMobile) themeIconMobile.src = 'images/sun-icon-dark.svg';
  } else {
    document.body.classList.remove('dark-mode');
    themeIcon.src = 'images/moon-icon-light.svg';
    if (themeIconMobile) themeIconMobile.src = 'images/moon-icon-light.svg';
  }
  localStorage.setItem('theme', mode);
}

function toggleTheme() {
  const current = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

themeToggle.addEventListener('click', toggleTheme);
if (themeIconMobile) themeIconMobile.addEventListener('click', toggleTheme);

// Load user preference
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
