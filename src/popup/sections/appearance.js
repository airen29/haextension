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
    <ListSubheader divider>Team Profile</ListSubheader>
    <ListItemSwitch
      primary="Show Jerseys"
      secondary="Creates one click button to show current jerseys in the team."
      {...getSwitchProps('showTeamJersey')}
    />
    <ListSubheader divider>Discussion</ListSubheader>
    <ListItemSwitch
      primary="Hide discussions"
      secondary="Ability to hide specific discussions."
      {...getSwitchProps('hideDiscussionTopics')}
    />
    {/* <ListItemSwitch
      primary="Move discussions"
      secondary="Hidden discussions will be moved to the separate table."
      {...getSwitchProps('moveHiddenTopics')}
    /> */}
  </React.Fragment>
)
