document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const sideNav = document.getElementById('sideNav');
  const menuBackdrop = document.getElementById('menuBackdrop');
  
  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });
  
  menuBackdrop.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });
  
  // Dark mode toggle
  const darkToggle = document.getElementById('darkToggle');
  const mobileDarkToggle = document.getElementById('mobileDarkToggle');
  const modeIcon = document.getElementById('modeIcon');
  
  // Check for saved theme preference or use preferred color scheme
  const currentTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply the current theme
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    modeIcon.src = 'images/sun-icon-dark.svg';
  }
  
  // Toggle theme function
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      modeIcon.src = 'images/moon-icon-light.svg';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      modeIcon.src = 'images/sun-icon-dark.svg';
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Add event listeners for theme toggles
  if (darkToggle) darkToggle.addEventListener('click', toggleTheme);
  if (mobileDarkToggle) mobileDarkToggle.addEventListener('click', toggleTheme);
  
  // Flip cards functionality
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    const flipBtn = card.querySelector('.flip-btn');
    const flipBackBtn = card.querySelector('.flip-back-btn');
    
    // Flip on card click (mobile)
    card.addEventListener('click', (e) => {
      // Don't flip if click was on a button (let button handle it)
      if (!e.target.closest('button')) {
        card.classList.toggle('flipped');
      }
    });
    
    // Flip on button click
    if (flipBtn) {
      flipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.add('flipped');
      });
    }
    
    // Flip back on back button click
    if (flipBackBtn) {
      flipBackBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('flipped');
      });
    }
  });
  
  // Navbar scroll effect
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (document.body.classList.contains('menu-open')) {
          document.body.classList.remove('menu-open');
        }
      }
    });
  });
});

// Pricing Card Touchscreen Behavior
document.addEventListener('DOMContentLoaded', () => {
  const pricingCards = document.querySelectorAll('.pricing-card');
  
  // Handle touch devices
  if ('ontouchstart' in window) {
    pricingCards.forEach(card => {
      // Toggle overlay on tap anywhere except the CTA button
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.pricing-cta')) {
          card.classList.toggle('active');
        }
      });
      
      // Close overlay when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.pricing-card')) {
          pricingCards.forEach(c => c.classList.remove('active'));
        }
      });
    });
  }
  
  // Original hover behavior for desktop
  else {
    pricingCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.pricing-overlay').style.transform = 'translateY(0)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.querySelector('.pricing-overlay').style.transform = 'translateY(100%)';
      });
    });
  }
});

