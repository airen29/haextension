import select from 'select-dom';
import jerseyLink from '../components/show-jersey/add-jersey-menu-item';

const playerMenuSelector = `a[href='index.php?p=manager_team_players.php']`;
const playerMenuHeaderSelector = `div.sub:nth-child(8)`;

export default () => {
  const playerMenuItem = select(playerMenuSelector)
  const playerMenuHeader = select(playerMenuHeaderSelector)

  Array.from(playerMenuHeader.children).forEach(menuItem => {
    if (menuItem === playerMenuItem) {
      playerMenuHeader.insertBefore(jerseyLink(), playerMenuItem);
    }
  })
}
