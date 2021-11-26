import HomeImage from '../assets/img/home_page.jpg';
import { createHeader, createFooter } from './navbar_footer';

function createIntro() {
  const content = document.getElementById('content');

  const introImage = new Image();
  introImage.src = HomeImage;

  content.appendChild(introImage);

  return content;
}

function createHomepage() {
  const body = document.body;

  body.insertBefore(createHeader(), body.firstChild);
  createIntro();
  body.appendChild(createFooter());
}

export {createHomepage};