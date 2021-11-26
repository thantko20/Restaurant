import HomeImage from '../assets/img/home_page.jpg';

function createLogo() {
  const h1Element = document.createElement('h1');
  h1Element.classList.add('logo');
  h1Element.innerText = 'Classico Italiano';

  return h1Element;
}

function createHeaderLinks() {
  const linksContainer = document.createElement('ul');
  linksContainer.classList.add('links');

  const homeLink = document.createElement('li');
  homeLink.innerText = 'Home';

  const menuLink = document.createElement('li');
  menuLink.innerText = 'Menu';

  const contactLink = document.createElement('li');
  contactLink.innerText = 'Contact';

  linksContainer.append(homeLink, menuLink, contactLink);

  return linksContainer;
}

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  header.append(createLogo(), createHeaderLinks());

  return header;
}

function createIntro() {
  const content = document.getElementById('content');

  const introImage = new Image();
  introImage.src = HomeImage;

  content.appendChild(introImage);

  return content;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.innerText = 'Created By Thant Ko Zaw';

  return footer;
}

function createHomepage() {
  const body = document.body;

  body.insertBefore(createHeader(), body.firstChild);
  createIntro();
  body.appendChild(createFooter());
}

export {createHomepage};