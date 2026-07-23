const rotatingItems = [
  'Automatización de Procesos',
  'Integración de Sistemas',
  'Optimización Operativa',
  'Desarrollo de Soluciones',
  'Calidad y Validación'
];

let currentItem = 0;
const rotatingElement = document.querySelector('[data-rotating-text]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let rotationTimer;

function rotateText() {
  if (!rotatingElement) return;
  rotatingElement.style.opacity = '0';
  setTimeout(() => {
    currentItem = (currentItem + 1) % rotatingItems.length;
    rotatingElement.textContent = rotatingItems[currentItem];
    rotatingElement.style.opacity = '1';
  }, 220);
}

if (rotatingElement && !prefersReducedMotion.matches) {
  rotationTimer = window.setInterval(rotateText, 2400);
}

prefersReducedMotion.addEventListener('change', (event) => {
  if (event.matches && rotationTimer) {
    window.clearInterval(rotationTimer);
    rotationTimer = undefined;
  } else if (!event.matches && rotatingElement && !rotationTimer) {
    rotationTimer = window.setInterval(rotateText, 2400);
  }
});

const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navbarCollapse && navbarCollapse.classList.contains('show') && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  });
});
