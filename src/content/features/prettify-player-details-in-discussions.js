import select from 'select-dom';
import playerTableTemplate from '../components/prettify-player-details-in-discussion/table-template/player-table-template';

// MOMTCHIL ZHELEV, ID 42239761
// Index šikovnosti 481 Známka 85%
// Vek 30 Štát Bulharsko
// Zmluva 12 dní Mužstvo Slovenská Republika
// Zranenie Zdravý Kvalita 97%
// Plat 301 224 Potenciál 18%
// Spokojnosť 100% Lojalita Zvýšiť lojalitu -3
// Hviezda 78%
// Ligová známka 100% Náklady ?
// SCHOPNOSTI
// Brána 0 (0%) Rýchlosť 6 (39%)
// Obrana 180 (9%) Sila 221 (52%)
// Útok 8 (62%) Sebaovládanie 44 (53%)
// Streľba 3 (53%) Forma 0 (0)
// Nahrávka 19 (16%) Skúsenosť 364 (53%)

const postSelector = "#p";
const divPostSelector = "div.entry:nth-child(11)";

export default async () => {
  const selectedPost = select(postSelector + "11");
  const selectedPostDiv = select(divPostSelector);

  console.log("info: ", selectedPost);
  // robit cez childNodes[LIST]

  console.log("selected post div: ", selectedPostDiv);

  console.log("table");
  const table = playerTableTemplate();
  console.log(table);
  selectedPostDiv.replaceChildren(selectedPost, table)

  console.log(selectedPostDiv);





}

