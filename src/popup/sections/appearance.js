import React from 'react'
import ListSubheader from '../components/list-subheader'
import ListItemSwitch from '../components/list-item-switch'

export const APPEARANCE = 'Appearance'

export default ({ getSwitchProps }) => (
  <React.Fragment>
    <ListSubheader>Menu</ListSubheader>
    <ListItemSwitch
      primary="Hide Sponsor menu"
      secondary="Hide Sponsor item from the left menu."
      {...getSwitchProps('hideSponsorMenu')}
    />
    <ListItemSwitch
      primary="Movable navigation"
      secondary="Allows left navigation to be movable."
      {...getSwitchProps('movableNavigation')}
    />
    <ListSubheader divider>Accessories</ListSubheader>
    <ListItemSwitch
      primary="Improve new message notification"
      secondary="Creates banner notification on new message."
      {...getSwitchProps('createMessageBanner')}
    />
    <ListItemSwitch
      primary="Improve Stop the player functionality (Red Hand)"
      secondary="Improves Stop the player for one match ability into Lines (known as Red Hand)"
      {...getSwitchProps('stopThePlayer')}
    />
    <ListItemSwitch
      primary="Show potential information"
      secondary="Shows player MAX/MIN potential in Youth School (and Draft)"
      {...getSwitchProps('youthSchoolPot')}
    />
    <ListSubheader divider>Discussion</ListSubheader>
    <ListItemSwitch
      primary="Hide discussions"
      secondary="Ability to hide specific discussions."
      {...getSwitchProps('hideDiscussionTopics')}
    />
    {/* <ListItemSwitch
      primary="Prettify player details in discussions"
      secondary="Prettify player details in discussions."
      {...getSwitchProps('prettifyPlayerDetailsInDiscussions')}
    /> */}
    {/* <ListItemSwitch
      primary="Move discussions"
      secondary="Hidden discussions will be moved to the separate table."
      {...getSwitchProps('moveHiddenTopics')}
    /> */}
  </React.Fragment>
)
