import navItem from "./navItem";

const tabs = [
  {
    tabName: 'Home',
    classList: ['home', 'active']
  },
  {
    tabName: 'Menu',
    classList: ['menu'],
  },
  {
    tabName: 'About',
    classList: ['about']
  }
];

const navBar = function () {
  const wrapper = document.createElement('nav');
  const container = document.createElement('ul');

  tabs.forEach(tab => {
    const item = navItem(tab.tabName, tab.classList);

    container.appendChild(item);
  });

  wrapper.appendChild(container);

  return wrapper;
}

export { navBar };
