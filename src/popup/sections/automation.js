import React from 'react'
import ListSubheader from '../components/list-subheader'
import ListItemSwitch from '../components/list-item-switch'

export const AUTOMATION = 'Automation'

export default ({ getSwitchProps }) => (
  <React.Fragment>
    <ListSubheader>Match</ListSubheader>
    <ListItemSwitch
      primary="Accept Friendly Matches"
      secondary="Accept friendly match invites automatically."
      {...getSwitchProps('matchAutoAcceptInvite')}
    />
  </React.Fragment>
)
