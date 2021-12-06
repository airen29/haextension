import React from 'react'
// import capitalize from 'lodash/capitalize'
// import { detect } from 'detect-browser'
// import { version } from '../../manifest'
import ListSubheader from '../components/list-subheader'
import ListItemLink from '../components/list-item-link'

// const userBrowser = detect()

export const HELP = 'Help'

export default () => (
  <React.Fragment>
    <ListSubheader>Issues?</ListSubheader>
    <ListItemLink
      primary="Report an Issue"
      // hockeyarena={encodeURI(
      //   `submit?selftext=true&text=\n\n\n---\n\nVersion: ${version}\nBrowser: ${capitalize(
      //     userBrowser.name
      //   )} (${userBrowser.version})`
      // )}
    />
    <ListSubheader divider>Questions?</ListSubheader>
    <ListItemLink primary="Ask on Hockeyarena" href="https://www.hockeyarena.net/en/index.php?p=manager_discussion_posts.php&table_id=506965" />
  </React.Fragment>
)
