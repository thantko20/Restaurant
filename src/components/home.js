import HomeImage from '../../assets/img/home_page.jpg';

const home = function () {
  const content = document.getElementById('content');

  const textDiv = document.createElement('div');
  textDiv.classList.add('intro-text');

  const firstPara = document.createElement('p');
  firstPara.innerText = 'Welcome to our Restaurant';

  const secondPara = document.createElement('p');
  secondPara.innerText = 'Here we offer the best italian foods.'

  textDiv.append(firstPara, secondPara);

  const introImage = new Image();
  introImage.src = HomeImage;

  content.append(introImage, textDiv);
};

export default home;