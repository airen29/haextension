/** @jsx h */
import { h } from 'dom-chef'

export default () => {
  return (
    <div>
      <br />
      <table id="tht-menu" class="stats" width="100%">
        <tbody>
          <tr class="caption">
            <th>Skryté témy (HockeyArena Extension)</th>
          </tr>
        </tbody>
      </table>
      <table id="table-hidden-topics" class="stats" width="100%" border="0">
        <thead>
          <tr class="thead">
            <td class="left"><a href="#">Téma</a></td>
            <td class="center"><a href="#">Zmena</a></td>
            <td class="right"><a href="#">Nové (Všetky)</a></td>
            <td class="center"><a href="#"></a></td>
          </tr>
        </thead>
        <tbody id="hidden-topics-body">
        </tbody>
      </table>
    </div>
  )
}
