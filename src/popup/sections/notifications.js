import React from 'react'
import ListSubheader from '../components/list-subheader'
import ListItemSwitch from '../components/list-item-switch'

export const NOTIFICATIONS = 'Notifications'

export default ({ getSwitchProps }) => (
  <React.Fragment>
    <ListSubheader>General</ListSubheader>
    <ListItemSwitch
      primary="Disable Notifications"
      secondary="All options below are ignored regardless of their setting."
      {...getSwitchProps('notifyDisabled')}
    />
  </React.Fragment>
)
