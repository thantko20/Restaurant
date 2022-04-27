import PestoPasta from '../../../assets/img/pesto_pasta_with_sliced_tomatoes.jpg';
import { menuItem } from './menuItem';

const menuList = [
  {
    name: 'Pesto Pasta with Sliced Tomatoes',
    price: '€5',
    imgSrc: PestoPasta
  },
  {
    name: 'Pesto Pasta with Sliced Tomatoes',
    price: '€5',
    imgSrc: PestoPasta
  },
  {
    name: 'Pesto Pasta with Sliced Tomatoes',
    price: '€5',
    imgSrc: PestoPasta
  },
  {
    name: 'Pesto Pasta with Sliced Tomatoes',
    price: '€5',
    imgSrc: PestoPasta
  }
];

const menu = function () {
  const content = document.getElementById('content');
  menuList.forEach(menuObj => content.appendChild(menuItem(menuObj)));
};

export default menu;