import select from 'select-dom';
import messageBanner from '../components/message-banner/message-banner';

const messageMenuHeaderSelector = `#sddm > li:nth-child(9) > a:nth-child(1) > img:nth-child(2)`;

const checkMail = text => {
  const regex = new RegExp('red');
  return regex.test(text);
};

const createMessageBanner = () => {
  const divSelector = `.contentCol`;
  const tempDiv = document.createElement('div');
  tempDiv.appendChild(messageBanner());

  const div = select(divSelector);
  div.insertAdjacentElement('afterbegin', tempDiv.firstChild);

  return true;
}

export default async () => {
  const messageMenuHeader = select(messageMenuHeaderSelector);

  const gotNewMail = checkMail(messageMenuHeader.currentSrc);

  if (gotNewMail) createMessageBanner();
}