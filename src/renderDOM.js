import { render } from '@testing-library/react';
import { header } from './components/header'

const renderDOM = (function () {
  const body = document.body;

  const renderHeader = function () {
    const headerEl = header();
    console.log(headerEl)
    body.insertBefore(headerEl, body.firstChild);
  };

  const init = function () {
    renderHeader();
  };

  return {
    renderHeader,
    init,
  };
})();

export default renderDOM;