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
