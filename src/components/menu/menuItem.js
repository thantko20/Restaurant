const menuItem = function ({name, price, imgSrc}) {
  const container = document.createElement('div');
  container.className = 'menu-item';

  const img = new Image();
  img.src = imgSrc;

  const priceXname = document.createElement('div');
  priceXname.className = 'price-name';
  priceXname.textContent = `${price} | ${name}`;

  container.append(img, priceXname);

  return container;
};

export { menuItem };