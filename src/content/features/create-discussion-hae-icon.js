import select from 'select-dom';
import addDiscussionHaeIcon from '../components/discussion-hae-icon/add-discussion-hae-icon';

const userSelector = '.user a[href="index.php?p=manager_manager_info.php&id=227387"]';

export default async () => {
  const messageAuthorIsHAEcreator = select.all(userSelector);

  Array.from(messageAuthorIsHAEcreator).forEach(element => {
    element.append(addDiscussionHaeIcon());
  })
}