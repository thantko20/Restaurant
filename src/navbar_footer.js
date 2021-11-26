const body = document.body;

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
  homeLink.classList.add('link', 'home');

  const menuLink = document.createElement('li');
  menuLink.innerText = 'Menu';
  menuLink.classList.add('link', 'menulink');

  const contactLink = document.createElement('li');
  contactLink.innerText = 'Contact';
  contactLink.classList.add('link', 'contact');

  linksContainer.append(homeLink, menuLink, contactLink);

  return linksContainer;
}

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  header.append(createLogo(), createHeaderLinks());

  body.insertBefore(header, body.firstChild);
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.innerText = 'Created By Thant Ko Zaw';

  body.appendChild(footer);
}

export {createHeader, createFooter};