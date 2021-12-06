import select from 'select-dom';
import storage from '../../shared/storage';
import haTable from '../components/hide-discussion/table-template/ha-table';

let hiddenDiscussions;
const divSelector = `.contentCol`;
const tableSelector = `table.stats:nth-child(5) > tbody:nth-child(2)`;
const newTableSelector = `#hidden-topics-body`

const getFirstItemFromArray = array => array.slice(0).shift();
const getDiscussionId = href => {
  const regexGroups = /table_id=(\d*)/.exec(href);
  return regexGroups[1] || false;
};

const isTopicHidden = (discussionId) => {
  return hiddenDiscussions.includes(discussionId);
};

const createNewTable = async () => {
  const tempDiv = document.createElement('div');
  tempDiv.appendChild(haTable());
  const div = select(divSelector);
  div.insertAdjacentElement('beforeend', tempDiv.firstChild);

  return true;
}


export default async () => {
  await createNewTable();
  ({ hiddenDiscussions } = await storage.getAll());
  const discussionTable = select(tableSelector);
  
  const newTable = select(newTableSelector);

  Array.from(discussionTable.children).forEach(tr => {
    const nameTd = getFirstItemFromArray(Array.from(tr.children))

    const discussionId = getDiscussionId(nameTd.lastChild.href);
    const topicIsHidden = isTopicHidden(discussionId);

    if (topicIsHidden) {
      const clonedNode = tr.cloneNode([true])
      newTable.appendChild(clonedNode);
      tr.remove();
    } 
  })
}
