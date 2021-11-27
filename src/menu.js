import PestoPasta from '../assets/img/pesto_pasta_with_sliced_tomatoes.jpg';

function createMenuItem(name, price, img) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const menuItemImg = new Image();
  menuItemImg.src = img;

  const menuItemPriceName = document.createElement('div');
  menuItemPriceName.classList.add('price-name');
  menuItemPriceName.innerText = `${price} | ${name}`;

  menuItem.append(menuItemImg, menuItemPriceName);

  return menuItem;
}

function createMenu() {
  const content = document.getElementById('content');

  content.appendChild(createMenuItem('Pesto Pasta With Sliced Tomatoes', '€5', PestoPasta));
  content.appendChild(createMenuItem('Pesto Pasta With Sliced Tomatoes', '€5', PestoPasta));
  content.appendChild(createMenuItem('Pesto Pasta With Sliced Tomatoes', '€5', PestoPasta));
  content.appendChild(createMenuItem('Pesto Pasta With Sliced Tomatoes', '€5', PestoPasta));
  content.appendChild(createMenuItem('Pesto Pasta With Sliced Tomatoes', '€5', PestoPasta));
  content.appendChild(createMenuItem('Pesto Pasta With Sliced Tomatoes', '€5', PestoPasta));
  content.appendChild(createMenuItem('Pesto Pasta With Sliced Tomatoes', '€5', PestoPasta));
}

export {createMenu};