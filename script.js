const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const flatFiles = {
  'assets/bladimir-alvarado.jpeg': 'bladimir-alvarado.jpeg',
  'assets/bladimir-alvarado-cutout.png': 'bladimir-alvarado-cutout.png',
  'assets/manual-preparacion-campana.pdf': 'manual-preparacion-campana.pdf',
  'assets/sermones/fe-cincelada.pdf': 'fe-cincelada.pdf',
  'assets/sermones/soberano-sobre-los-imperios.pdf': 'soberano-sobre-los-imperios.pdf',
  'assets/sermones/el-precio-del-orgullo.pdf': 'el-precio-del-orgullo.pdf',
  'assets/sermones/diagnosticando-laodicea.pdf': 'diagnosticando-laodicea.pdf',
  'assets/sermones/la-ultima-palabra-de-dios.pdf': 'la-ultima-palabra-de-dios.pdf',
};

document.querySelectorAll('[src], [href]').forEach((element) => {
  ['src', 'href'].forEach((attribute) => {
    const value = element.getAttribute(attribute);
    if (flatFiles[value]) element.setAttribute(attribute, flatFiles[value]);
  });
});

if (window.location.pathname.endsWith('/manual.html')) {
  const manualUpdates = document.createElement('link');
  manualUpdates.rel = 'stylesheet';
  manualUpdates.href = 'manual-updates.css';
  document.head.appendChild(manualUpdates);
}
