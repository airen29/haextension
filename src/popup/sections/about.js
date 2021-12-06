import React from 'react'
import changelogs from '../../changelogs'
import { version } from '../../manifest'
import ListSubheader from '../components/list-subheader'
import ListItemLink from '../components/list-item-link'

export const ABOUT = 'About'

export default () => (
  <React.Fragment>
    <ListSubheader>About</ListSubheader>
    <ListItemLink
      primary="Version"
      secondary={version}
      href={changelogs[version]}
    />
    <ListItemLink
      primary="Website"
      secondary="github.com/airen29"
      href="https://github.com/airen29"
    />
    <ListItemLink
      primary="Source Code"
      secondary="GitHub"
      href="https://github.com/airen29"
    />
    <ListSubheader divider>Community & Social</ListSubheader>
    <ListItemLink primary="Twitter" href="https://twitter.com/kpatlevic" />
    <ListSubheader divider>Team</ListSubheader>
    <ListItemLink primary="airen29" secondary="Creator" hockeyarena="227387" />
  </React.Fragment>
)
