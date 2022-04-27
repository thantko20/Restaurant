import './style.css'
import { header } from './components/header'

const renderDOM = (function () {
  const body = document.body;

  const renderHeader = function () {
    const headerEl = header();
    console.log(headerEl)
    body.insertBefore(headerEl, body.firstChild);
  };

  return {
    renderHeader,
  };
})();

renderDOM.renderHeader();