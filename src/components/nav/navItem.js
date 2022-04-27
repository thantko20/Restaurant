import renderDOM from "../../renderDOM";

const navItem = function (name, classList=[]) {
  const classListStr = classList.join(' ');

  const listEl = document.createElement('li');
  listEl.textContent = name;
  listEl.className = `link ${classListStr}`;

  listEl.addEventListener('click', () => renderDOM.renderTab(classList[0]));

  return listEl;
}

export default navItem;