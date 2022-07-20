/** @jsx h */
import { h } from 'dom-chef'
import storage from '../../../shared/storage'

const unhideIcon = 'https://www.hockeyarena.net//pics/trup.png'

export default (discussionId) => {
  const handleClick = async event => {
    console.log("test")
    // event.preventDefault();
    // const { hiddenDiscussions } = await storage.getAll();
    // console.log(hiddenDiscussions + "muhehe")
    // const unique = new Set(hiddenDiscussions);
    // unique.delete(discussionId);

    // console.log(unique);
    // await storage.set({ hiddenDiscussions: [...unique] })
    window.location.reload(false);
  };

  return (
    <img 
      src={unhideIcon}
      alt="Odkryť tému"
      title="Odkryť tému"
      style={{ verticalAlign: 'middle' }}
      height="13px"
      border="0"
      id={discussionId}
      onClick={handleClick}
    />
  )
}
