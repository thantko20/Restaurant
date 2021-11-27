import HomeImage from '../assets/img/home_page.jpg';

function createIntroText() {
  const textDiv = document.createElement('div');
  textDiv.classList.add('intro-text');

  const firstPara = document.createElement('p');
  firstPara.innerText = 'Welcome to our Restaurant';

  const secondPara = document.createElement('p');
  secondPara.innerText = 'Here we offer the best italian foods.'

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