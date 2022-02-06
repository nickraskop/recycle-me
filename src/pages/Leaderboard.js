import React from 'react';

export default function Leaderboard() {
  return (
    <body>
    <ul>
      <li><a href="play">Play</a></li>
      <li><a href="about">About</a></li>
      <li><a href="learn">Learn</a></li>
      <li><a href="leaderboard">Leaderboard</a></li>
    </ul>
    <div id='inbody'>
      <h1>Leaderboard</h1>
      <button>Recycle</button>
      <button>Landfill</button>
      <button>Compost</button>
      <table>
        <tr>
          <th>Place</th>
          <th>Name</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Nick</td>
        </tr>
        <tr>
          <td>2</td>

        </tr>
      </table>
      
    </div>
  </body>
  );
}