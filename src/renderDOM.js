import { header } from './components/header';
import home from './components/home';
import menu from './components/menu/menu';
import contact from './components/contact';

const renderDOM = (function () {
  const body = document.body;
  const content = document.getElementById('content');

  const renderHeader = function () {
    const headerEl = header();
    body.insertBefore(headerEl, body.firstChild);
  };

  const renderHome = function () {
    home();
  };

  const renderMenu = function () {
    menu();
  };

  const renderContact = function () {
    contact();
  };

  const renderTab = function (className) {
    const tabEl = document.querySelector(`.${className}`);
    const activeEl = document.querySelector('.active');

    if (tabEl === activeEl) return;

    tabEl.classList.add('active');
    activeEl.classList.remove('active');

    renderContent(className);
  };

  const renderContent = function (name) {
    content.innerHTML = '';

    switch (name) {
      case 'home':
        renderHome();
        break;

      case 'menu':
        renderMenu();
        break;

      case 'contact':
        renderContact();
        break;
        
      default:
        break;
    }
  };

  const init = function () {
    renderHeader();
    renderContent('home');
  };

  return {
    renderHeader,
    renderHome,
    renderTab,
    init,
  };
})();

export default renderDOM;