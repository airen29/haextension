import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default ({ href, hockeyarena, ...props }) => {
  let link = href

  if (hockeyarena) {
    link = `https://www.hockeyarena.net/sk/index.php?p=manager_manager_info.php&id=${hockeyarena}`
  } 

  return (
    <ListItem button component="a" href={link} target="_blank">
      <ListItemText {...props} />
    </ListItem>
  )
}
