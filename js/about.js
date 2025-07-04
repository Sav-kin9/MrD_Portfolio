// Typing effect that restarts on scroll into view
const text = "THIS IS MR.D | BUILT WITH VISION";
const typingText = document.getElementById("typing-text");
let index = 0;
let isTyping = false;

// Function to type the text
function type() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 60);
  } else {
    isTyping = false;
  }
}

// Function to reset and start typing
function startTyping() {
  if (!isTyping) {
    index = 0;
    typingText.innerHTML = "";
    isTyping = true;
    type();
  }
}

// Observer to detect when element is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startTyping();
      }
    });
  },
  {
    threshold: 0.6,
  }
);

observer.observe(typingText);


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

//   // Close menu on backdrop click

  const menuBackdrop = document.getElementById("menuBackdrop");

  menuBackdrop.addEventListener("click", () => {
    body.classList.remove("menu-open");
  });

  // Optional: Close when a link inside menu is clicked
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


// // ========DARK MODE TOGGLE BUTTON========

// const themeToggle = document.getElementById('themeToggle');
// const themeIcon = document.getElementById('themeIcon');
// const themeIconMobile = document.getElementById('themeIconMobile');

// function setTheme(mode) {
//   if (mode === 'dark') {
//     document.body.classList.add('dark-mode');
//     themeIcon.src = 'images/sun-icon-dark.svg';
//     if (themeIconMobile) themeIconMobile.src = 'images/sun-icon-dark.svg';
//   } else {
//     document.body.classList.remove('dark-mode');
//     themeIcon.src = 'images/moon-icon-light.svg';
//     if (themeIconMobile) themeIconMobile.src = 'images/moon-icon-light.svg';
//   }
//   localStorage.setItem('theme', mode);
// }

// function toggleTheme() {
//   const current = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
//   setTheme(current === 'dark' ? 'light' : 'dark');
// }

// themeToggle.addEventListener('click', toggleTheme);
// if (themeIconMobile) themeIconMobile.addEventListener('click', toggleTheme);

// // Load user preference
// const savedTheme = localStorage.getItem('theme') || 'light';
// setTheme(savedTheme);
