/** @jsx h */
import { h } from 'dom-chef'

const stopHandIcon = 'https://www.hockeyarena.net/pics/stop.png'

export default (playerId) => {
  return (
    <a href={`index.php?p=manager_lines_stop.inc&pid=${playerId}`}>
      <img 
        src={stopHandIcon}
        alt="Vyradiť do zostavy na jeden zápas"
        title="Vyradiť do zostavy na jeden zápas"
        style={{ verticalAlign: 'middle' }}
        height="13px"
        border="0"
        id={playerId}
      />
    </a>
  )
}
