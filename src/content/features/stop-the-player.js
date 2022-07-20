import select from 'select-dom';
import addStopThePlayerFunctionality from '../components/stop-the-player/add-stop-the-player-functionality';

const tableSelector = "table#main.fontCond"
const wrongBaseURI = "https://www.hockeyarena.net/sk/index.php?p=manager_lines_lineup_form_new.php#x"
const stopThePlayerIconURI = "https://www.hockeyarena.net/pics/stop.png" 

const getPlayerId = href => {
  const regexGroups = /id=(\d*)/.exec(href);
  return regexGroups[1] || false;
};

const addFunctionalityToStop = async (playerId, element) => {
  const addIconWithFunctionality = addStopThePlayerFunctionality(playerId)
  element.prepend(addIconWithFunctionality)
};

export default async () => {
  const playersTable = select(tableSelector);

  Array.from(playersTable.childNodes[1].children).forEach(tr => {
    if (tr.className === "sr1" || tr.className === "sr2") {
      const playerElement = tr.children[1];
      const playerURI = playerElement.children[0].href;
      const playerElementChild = playerElement.children[0];

      console.log(playerElementChild)
      
      if (playerElementChild.firstChild.attributes && 
        playerElementChild.firstChild.attributes[0].nodeValue === stopThePlayerIconURI) playerElement.children[0].remove();
  
      if (playerURI !== wrongBaseURI) {
        const playerId = getPlayerId(playerURI)
        addFunctionalityToStop(playerId, playerElement)
      }
    }
  })

}
