const navItem = function (name, classList=[]) {
  const classListStr = classList.join(' ');

  const listEl = document.createElement('li');
  listEl.textContent = name;
  listEl.className = `link ${classListStr}`;

  return listEl;
}

export default navItem;