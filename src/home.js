import HomeImage from '../assets/img/home_page.jpg';
import { createHeader, createFooter } from './navbar_footer';

function createIntroText() {
  const textDiv = document.createElement('div');
  textDiv.classList.add('intro-text');

  const firstPara = document.createElement('p');
  firstPara.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius maximus facilisis.'

  const secondPara = document.createElement('p');
  secondPara.innerText = 'Morbi sit amet lorem non ante efficitur accumsan.'

  textDiv.append(firstPara, secondPara);

  return textDiv;
}

function createIntro() {
  const content = document.getElementById('content');

  const introImage = new Image();
  introImage.src = HomeImage;

  content.append(introImage, createIntroText());
}

export {createIntro};