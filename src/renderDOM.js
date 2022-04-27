import { header } from './components/header';
import home from './components/home';

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
  };

  const init = function () {
    renderHeader();
    renderHome();
  };

  return {
    renderHeader,
    renderHome,
    renderTab,
    init,
  };
})();

export default renderDOM;