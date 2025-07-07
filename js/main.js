// DOM Elements
const elements = {
  typingText: document.getElementById("typing-text"),
  tiltContainer: document.getElementById("tilt-container"),
  tiltImage: document.getElementById("tilt-image"),
  menuToggle: document.getElementById("menuToggle"),
  sideNav: document.getElementById("sideNav"),
  menuBackdrop: document.getElementById("menuBackdrop"),
  navbar: document.getElementById("mainNavbar"),
  body: document.body
};

// Typing Effect
function initTypingEffect() {
  const text = "Hello, I'm Saviour Uwem Nkanga";
  let index = 0;
  let isTyping = false;

  const type = () => {
    if (index < text.length) {
      elements.typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 60);
    } else {
      isTyping = false;
    }
  };

  const startTyping = () => {
    if (!isTyping) {
      index = 0;
      elements.typingText.textContent = "";
      isTyping = true;
      type();
    }
  };

  new IntersectionObserver(
    (entries) => entries.forEach(entry => entry.isIntersecting && startTyping()),
    { threshold: 0.6 }
  ).observe(elements.typingText);
}

// Tilt Effect
function initTiltEffect() {
  const handleMove = (e) => {
    const bounds = elements.tiltContainer.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const deltaX = (e.clientX - centerX) / 20;
    const deltaY = (e.clientY - centerY) / 20;

    elements.tiltImage.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
  };

  elements.tiltContainer.addEventListener("mousemove", handleMove);
  elements.tiltContainer.addEventListener("mouseleave", () => {
    elements.tiltImage.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
}

// Menu Handling
function initMenu() {
  elements.menuToggle.addEventListener("click", () => {
    elements.body.classList.toggle("menu-open");
  });

  elements.menuBackdrop.addEventListener("click", () => {
    elements.body.classList.remove("menu-open");
  });

  document.querySelectorAll(".side-nav a").forEach(link => {
    link.addEventListener("click", () => {
      elements.body.classList.remove("menu-open");
    });
  });
}

// Scroll Effects
function initScrollEffects() {
  // Fade-in elements
  const faders = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    faders.forEach(el => {
      if (el.getBoundingClientRect().top < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  // Navbar effect
  const handleScroll = () => {
    elements.navbar.classList.toggle("scrolled", window.scrollY > 50);
  };

  window.addEventListener("scroll", () => {
    revealOnScroll();
    handleScroll();
  });
  window.addEventListener("load", revealOnScroll);
}

// Initialize everything when fonts are ready
document.fonts.ready.then(() => {
  initTypingEffect();
  initTiltEffect();
  initMenu();
  initScrollEffects();
});
