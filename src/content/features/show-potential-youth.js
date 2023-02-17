import select from 'select-dom';

const youthSchoolTableSelector = "#table-1 > tbody:nth-child(2)"
const youthDraftTableSelector = "#table-2 > tbody:nth-child(2)"
const preciseIconUrl = "https://www.hockeyarena.net/images/60/precise10.png"

const PLAYER_STATS_ARRAY = [
  {
    "age": 15,
    "potential": [106, 100, 94, 88, 82, 76, 71]
  },
  {
    "age": 16,
    "potential": [100, 94, 88, 82, 76, 71, 65]
  },
  {
    "age": 17,
    "potential": [94, 88, 82, 76, 71, 65, 59]
  },
  {
    "age": 18,
    "potential": [88, 82, 76, 71, 65, 59, 53]
  },
  {
    "age": 19,
    "potential": [82, 76, 71, 65, 59, 53, 47]
  },
  {
    "age": 20,
    "potential": [76, 71, 65, 59, 53, 47, 41]
  }
]

const showTruePotential = (playerAge, playerPot) => {
  let text;

  Array.from(PLAYER_STATS_ARRAY).forEach(playerStats => {
    if (playerStats.age === playerAge) {
      const indexOfPlayerPot = playerStats.potential.indexOf(playerPot);
      if (indexOfPlayerPot === 0) text = `(MAX)`;
      else text = `(MAX-${indexOfPlayerPot})`
    }
  })

  return text;
}


export default () => {
  const youthSchoolTable = select(youthSchoolTableSelector);
  const youthDraftTable = select(youthDraftTableSelector);

  Array.from(youthSchoolTable.children).forEach(tr => {
    const playerAgeArray = tr.children[1];
    const playerAgeNumber = parseInt(playerAgeArray.textContent);

    const playerPotArray = tr.children[3];
    const playerPotNumber = parseInt(playerPotArray.textContent);

    if (playerPotArray.firstChild.currentSrc === preciseIconUrl) 
      playerPotArray.innerHTML += showTruePotential(playerAgeNumber, playerPotNumber);
  })

  Array.from(youthDraftTable.children).forEach(tr => {
    const playerAgeArray = tr.children[1];
    const playerAgeNumber = parseInt(playerAgeArray.textContent);

    const playerPotArray = tr.children[3];
    const playerPotNumber = parseInt(playerPotArray.textContent);

    playerPotArray.innerHTML += showTruePotential(playerAgeNumber, playerPotNumber);
  })
}
