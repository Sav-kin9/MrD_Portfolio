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