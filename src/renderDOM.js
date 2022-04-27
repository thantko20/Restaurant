import { header } from './components/header';
import home from './components/home';
import menu from './components/menu/menu';

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

  const renderTab = function (className) {
    const tabEl = document.querySelector(`.${className}`);
    const activeEl = document.querySelector('.active');

    if (tabEl === activeEl) return;

    tabEl.classList.add('active');
    activeEl.classList.remove('active');

    renderContent(className);
  };

  const renderContent = function (name) {
    switch (name) {
      case 'home':
        content.innerHTML = '';
        renderHome();
        break;

      case 'menu':
        content.innerHTML = '';
        menu();
        break;

      case 'about':
        //renderAbout();
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