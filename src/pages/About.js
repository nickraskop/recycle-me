import React from 'react';

export default function About() {
  return (
    <body>
      <ul>
        <li><a href="play">Play</a></li>
        <li><a href="about">About</a></li>
        <li><a href="learn">Learn</a></li>
        <li><a href="leaderboard">Leaderboard</a></li>
      </ul>
      <div id='inbody'>
        <h1>About</h1>
      </div>
    </body>
  );
}


// document.addEventListener('keydown', function(e) {
//   if (e.key === 'f') {
//     left();
//   }
//   else if (e.key === 'g') {
//     right();
//   }
//   else if (e.key === '1') {
//     spawnTrash();
//   }
// });