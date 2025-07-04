// Typing Effect
function initTypingEffect() {
  const text = "Mr. D | BUILT WITH VISION";
  const typingEl = document.getElementById("typing-text");
  let i = 0;
  
  function type() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    } else {
      // Add blinking cursor after typing completes
      typingEl.innerHTML += '<span class="blinking-cursor">|</span>';
    }
  }
  
  type();
}

// Scroll Animations
function initScrollAnimations() {
  const faders = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
  
  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
}

// Initialize everything when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  initTypingEffect();
  initScrollAnimations();
  
  // Blinking cursor animation
  const style = document.createElement("style");
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
});
