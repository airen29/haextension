import storage from '../shared/storage'
import * as pages from './helpers/pages'
import { runFeatureIf } from './helpers/user-settings'
import hideSponsorMenu from './features/hide-sponsor-menu-item'
import hideDiscussionTopics from './features/hide-discussion-topics';
import moveHiddenTopics from './features/move-hidden-topics';
import movableNavigation from './features/movable-navigation';
import createMessageBanner from './features/create-message-banner';

function observeBody() {
  const observer = new MutationObserver(() => {
    runFeatureIf(
      'hideSponsorMenu',
      hideSponsorMenu
    );
  })

  observer.observe(document.body, { childList: true, subtree: true })
}

function runOnce() {
  if (pages.isDiscussion()) {
    runFeatureIf(
      'hideDiscussionTopics',
      hideDiscussionTopics
    );

    runFeatureIf(
      'moveHiddenTopics',
      moveHiddenTopics
    );
  }

  runFeatureIf(
    'createMessageBanner',
    createMessageBanner
  );

  runFeatureIf(
    'movableNavigation',
    movableNavigation
  );
}

;(async () => {
  const { extensionEnabled } = await storage.getAll()

  if (!extensionEnabled) {
    return
  }

  observeBody()
  runOnce()
})()
