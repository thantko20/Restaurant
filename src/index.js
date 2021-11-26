import './style.css'
import { createIntro } from './home'
import { createHeader, createFooter } from './navbar_footer';

const initWebsite = (() => {
  createHeader();
  const navLinks = document.querySelectorAll('.link');

  createFooter();
  createIntro();

  navLinks.forEach(link => link.addEventListener('click', renderTab));

  function deleteChildren(parent) {
    while(parent.firstChild) parent.removeChild(parent.firstChild);
  }

  function renderTab(link) {
    const content = document.getElementById('content');
    deleteChildren(content);

    const target = link.target;
    if(target.classList.contains('home')) createIntro();
    // TODO
  }
})();