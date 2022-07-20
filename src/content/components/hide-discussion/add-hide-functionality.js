/** @jsx h */
import { h } from 'dom-chef'
import storage from '../../../shared/storage'

const deleteIcon = 'https://www.hockeyarena.net/pics/del.gif'

export default (discussionId) => {
  const handleClick = async event => {
    // event.preventDefault();
    const { hiddenDiscussions } = await storage.getAll();
    const unique = new Set(hiddenDiscussions);
    unique.add(discussionId);
    await storage.set({ hiddenDiscussions: [...unique] })
    window.location.reload(false);
  };

  return (
    <img 
      src={deleteIcon}
      alt="Skryť tému"
      title="Skryť tému"
      style={{ verticalAlign: 'middle' }}
      height="13px"
      border="0"
      id={discussionId}
      onClick={handleClick}
    />
  )
}
