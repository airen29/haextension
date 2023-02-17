/** @jsx h */
import { h } from 'dom-chef'

const playerId = "42255038"
const playerName = "Ādams Apaļais, ID 42255038"
const playerIs = "484"
const playerValue = "86%"
const playerAge = "30"
const playerNationality = "Lotyšsko"
const playerContract = "8"
const playerTeam = "🇸🇰 ʜᴋ ᴘᴏᴘʀᴀᴅ"
const playerHealth = "Zdravý"
const playerQuality = "92%"
const playerWage = "301 224"
const playerPotential = "18%"
const playerHappiness = "100%"
const playerLoyalty = "+2"
const playerLeagueValues = "94%"

const headerTable = () => (
  <tbody>
    <tr class="">
      <td class="center" colspan="2" style={{ textAlign: "left", paddingLeft: "4px", paddingBottom: "4px" }} rowspan="8">
        <a href={`index.php?p=public_player_info.inc&id=${playerId}`}>
          <img class="playerPic" src="https://www.hockeyarena.net/foto.php?id=hockeyarenaExtension22%2FlWbXClFdBK0o%3D&x=0_0_0_0" />
        </a>
      </td>
      <td class="center" rowspan="8">&nbsp;</td>
      <td class="qb1 qbig">Index šikovnosti</td>
      <td class="q1 qbig">{playerIs}</td>
      <td class="center">&nbsp;</td>
      <td class="qb1 qbig">Známka</td>
      <td class="q1 qbig">{playerValue}</td>
    </tr>
    <tr class="odd">
      <td class="qb1">Vek</td>
      <td class="q1">{playerAge}</td>
      <td class="center">&nbsp;</td>
      <td class="qb1">Štát</td>
      <td class="q1">&nbsp;{playerNationality}</td>
    </tr>
    <tr class="">
      <td class="qb">Zmluva</td>
      <td class="q">{playerContract} dní</td>
      <td class="center">&nbsp;</td>
      <td class="qb">Mužstvo</td>
      <td class="q" style={{ whiteSpace: "normal" }}>{playerTeam}</td>
    </tr>
    <tr class="odd">
      <td class="qb">Zranenie</td>
      <td class="q">{playerHealth}</td>
      <td class="center">&nbsp;</td>
      <td class="qb">Kvalita</td>
      <td class="q">
        <span id="q">
          <img src="https://www.hockeyarena.net/images/60/precise10.png" style={{ verticalAlign: "baseline", height: "10px" }} />
          &nbsp;{playerQuality}
        </span>
      </td>
    </tr>
    <tr class="">
      <td class="qb">Plat</td>
      <td class="q">{playerWage}</td>
      <td class="center">&nbsp;</td>
      <td class="qb">Potenciál</td>
      <td class="q">
        <span id="p">
          <a href="javascript: void(0)" title="WHO KNOWS, RIGHT?">
            <img src="https://www.hockeyarena.net/images/60/precise10.png" style={{ verticalAlign: "baseline", height: "10px" }} />
            &nbsp;{playerPotential}
          </a> 
        </span>
      </td>
    </tr>
    <tr class="odd">
      <td class="qb"><a href={`index.php?p=manager_player_satisfaction.inc&player_id=${playerId}`} class="bl">Spokojnosť</a></td>
      <td class="q"><a href={`index.php?p=manager_player_satisfaction.inc&player_id=${playerId}`} class="bl">{playerHappiness}</a></td>
      <td class="center">&nbsp;</td>
      <td class="qb">Lojalita</td>
      <td class="q">{playerLoyalty}</td>
    </tr>
    <tr class="">
      <td class="qb">&nbsp;</td>
      <td class="q">&nbsp;</td>
      <td class="center">&nbsp;</td>
      <td class="qb">Hviezda</td>
      <td class="q"></td>
    </tr>
    <tr class="odd">
      <td class="qb">Ligová známka</td>
      <td class="q">{playerLeagueValues}</td>
      <td class="center">&nbsp;</td>
      <td class="qb"></td>
      <td class="q"></td>
    </tr>
  </tbody>
)

const statsTable = () => (
  <tbody>
    <tr class="">
      <td class="qb">Brána</td>
      <td class="q">217</td>
      <td class="center">&nbsp;</td>
      <td class="qb">Rýchlosť</td>
      <td class="q">197</td>
    </tr>
    <tr class="odd">
      <td class="qb">Obrana</td>
      <td class="q">0</td>
      <td class="center">&nbsp;</td>
      <td class="qb">Sila</td>
      <td class="q">0</td>
    </tr>
    <tr class="">
      <td class="qb">Útok</td>
      <td class="q">0</td>
      <td class="center">&nbsp;</td>
      <td class="qb">Sebaovládanie</td>
      <td class="q">30</td>
    </tr>
    <tr class="odd">
      <td class="qb">Streľba</td>
      <td class="q">0</td>
      <td class="center">&nbsp;</td>
      <td class="qb">Forma</td>
      <td class="q">95 (-5)</td>
    </tr>
    <tr class="">
      <td class="qb">Kontrola puku/Nahrávka</td>
      <td class="q">40</td>
      <td class="center">&nbsp;</td>
      <td class="qb">Skúsenosť</td>
      <td class="q">245</td>
    </tr>
    <tr class="odd">
      <td class="qb"><span style={{ color: "red!important" }}>Created by HockeyArena Extension</span></td>
      <td class="q">&nbsp;</td>
      <td class="center">&nbsp;</td>
      <td class="qb">Author:</td>
      <td class="q">airen</td>
    </tr>
  </tbody>
)

export default () => {
  return (
    <div>
      <br />
      <table class="stats" width="100%">
        <tbody>
          <tr class="caption">&nbsp;&nbsp;{playerName}</tr>
        </tbody>
      </table>
      <table class="stats" width="100%" border="0">
        { headerTable() }
      </table>
      <table class="stats" width="100%">
        <tbody>
          <tr class="caption">
            <th>&nbsp;&nbsp;Schopnosti</th>
          </tr>
        </tbody>
      </table>
      <table class="stats" width="100%" border="0">
        { statsTable() }
      </table>
    </div>
  )
}
