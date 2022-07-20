import select from 'select-dom';
import creatorBanner from '../components/creator-banner/add-creator-banner';

const createInfoBanner = () => {
  const divSelector = `.contentCol`;
  const tempDiv = document.createElement('div');
  tempDiv.appendChild(creatorBanner());

  const div = select(divSelector);
  div.insertAdjacentElement('afterbegin', tempDiv.firstChild);

  return true;
}

export default async () => {
    createInfoBanner();
}