const contact = function () {
  const contactHeader = document.createElement('h2');
  contactHeader.innerText = 'Contact';

  const infoContainer = document.createElement('div');

  const email = document.createElement('div');
  email.innerHTML = `<em>Email: </em> example@mail.com`;

  const phoneNumber = document.createElement('div');
  phoneNumber.innerHTML = `<em>Ph: </em> 012345678`;

  infoContainer.append(email, phoneNumber);

  const content = document.getElementById('content');
  content.append(contactHeader, infoContainer);
}

export default contact;