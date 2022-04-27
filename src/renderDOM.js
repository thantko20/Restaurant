import { header } from './components/header';
import home from './components/home';
import menu from './components/menu/menu';
import contact from './components/contact';
import footer from './components/footer';

const renderDOM = (function () {
  const body = document.body;
  const content = document.getElementById('content');

  const clearContent = function () {
    while (content.firstChild) {
      content.firstChild.remove();
    }
  };

  const renderHeader = function () {
    const headerEl = header();
    body.insertBefore(headerEl, body.firstChild);
  };

  const renderFooter = function () {
    body.appendChild(footer());
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
    clearContent();

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
    renderFooter();
  };

  return {
    renderTab,
    init,
  };
})();

export default renderDOM;