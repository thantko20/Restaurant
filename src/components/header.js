import { navBar } from "./nav/navBar";

const logo = function (name) {
  const el = document.createElement('h1');
  el.className = 'logo'; 
  el.textContent = 'Classico Italiano';

  return el;
}

const header = function () {
  const container = document.createElement('header');
  container.className = 'header';

  container.append(logo(), navBar());

  return container;
}

export { header };