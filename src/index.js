import './style.css'
import { createIntro } from './home'
import { createHeader, createFooter } from './navbar_footer';
import { createMenu } from './menu';
import { createContact } from './contact';

const initWebsite = (() => {
  createHeader();
  const navLinks = document.querySelectorAll('.link');

  createFooter();
  createIntro();

  navLinks.forEach(link => link.addEventListener('click', (e) => {
    renderTab(e.target);
    toggleActiveLink(e.target);
  }));

  function toggleActiveLink(link) {
    navLinks.forEach(tab => tab === link ? tab.classList.add('active') : tab.classList.remove('active'));
  }

  function deleteChildren(parent) {
    while(parent.firstChild) parent.removeChild(parent.firstChild);
  }

  function renderTab(target) {
    const content = document.getElementById('content');
    deleteChildren(content);

    if(target.classList.contains('home')) createIntro();
    if(target.classList.contains('menu')) createMenu();
    if(target.classList.contains('contact')) createContact();
  }
})();