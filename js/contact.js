document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const toastContainer = document.getElementById('toastContainer');
  const menuToggle = document.getElementById('menuToggle');
  const sideNav = document.getElementById('sideNav');
  const backdrop = document.getElementById('menuBackdrop');
  const darkToggle = document.getElementById('darkToggle');
  const modeIcon = document.getElementById('modeIcon');

  const FORMSPREE_URL = 'https://formspree.io/f/meokwbpo';

  // ===== FORM SUBMISSION =====
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 6px;"></i> Sending...';

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(contactForm)
      });

      if (response.ok) {
        showToast('Message sent successfully!', 'success');
        contactForm.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      showToast('Failed to send. Please try again.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span class="btn-text">Send Message</span><i class="fas fa-paper-plane"></i>';
    }
  });

  // ===== SHOW TOAST =====
  function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 5000);
  }

  // ===== SCROLL ANIMATION =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.form-group, .contact-card').forEach(el => {
    observer.observe(el);
  });

  // ===== MENU TOGGLE =====
  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  backdrop.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });

  // ===== DARK MODE TOGGLE =====
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change icon
    const isDark = document.body.classList.contains('dark-mode');
    modeIcon.src = isDark ? 'images/sun-icon-dark.svg' : 'images/moon-icon-light.svg';
  });
});
