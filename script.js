const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-links');
menuButton.hidden = false;
navigation.dataset.collapsible = 'true';
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
function revealExperience() {
  const target = document.getElementById(location.hash.slice(1));
  if (target?.matches('details.experience')) target.open = true;
}
window.addEventListener('hashchange', revealExperience);
revealExperience();
document.querySelector('#year').textContent = new Date().getFullYear();
