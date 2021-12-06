import select from 'select-dom';
import storage from '../../shared/storage';
import addHideFunctionality from '../components/hide-discussion/add-hide-functionality';

let hiddenDiscussions;
const tableSelector = `table.stats:nth-child(5) > tbody:nth-child(2)`;

const getFirstItemFromArray = array => array.slice(0).shift();
const getLastItemFromArray = array => array.slice(-1).pop();
const getDiscussionId = href => {
  const regexGroups = /table_id=(\d*)/.exec(href);
  return regexGroups[1] || false;
};

const isTopicHidden = (discussionId) => {
  return hiddenDiscussions.includes(discussionId);
};

const addFunctionality = async (nameEl, element) => {
  const discussionId = getDiscussionId(nameEl.lastChild.href);
  const addIconWithFunctionality = addHideFunctionality(discussionId)
  
  element.appendChild(addIconWithFunctionality)
};

export default async () => {
  ({ hiddenDiscussions } = await storage.getAll());
  const discussionTable = select(tableSelector);

  Array.from(discussionTable.children).forEach(tr => {
    const nameTd = getFirstItemFromArray(Array.from(tr.children))
    const iconsTd = getLastItemFromArray(Array.from(tr.children))

    const discussionId = getDiscussionId(nameTd.lastChild.href);
    const topicIsHidden = isTopicHidden(discussionId);

    if (!topicIsHidden) addFunctionality(nameTd, iconsTd);
  })
}
