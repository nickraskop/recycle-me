import React from 'react';


var trashCan = document.querySelector(".can");
let move = 30;

window.addEventListener("keyup", (e) => {
  switch(e.key){
    case "ArrowLeft":
      trashCan.style.left = parseInt(trashCan.style.left) - move + "px";
      break;
    case "ArrowRight":
      trashCan.style.left = parseInt(trashCan.style.left) + move + "px";
      break;
  }
});
window.addEventListener("load", () => {
  trashCan.style.position = "absolute";
  trashCan.style.left = 0;
});

window.addEventListener("keyup", (e) => {
  switch(e.key){
    case "ArrowLeft":
      trashCan.style.left = parseInt(trashCan.style.left) - move + "px";
      break;
    case "ArrowRight":
      trashCan.style.left = parseInt(trashCan.style.left) + move + "px";
      break;
  }
});

export default function Play() {
  return (
    <body>
    <ul>
      <li><a href="play">Play</a></li>
      <li><a href="about">About</a></li>
      <li><a href="learn">Learn</a></li>
      <li><a href="leaderboard">Leaderboard</a></li>
    </ul>
    <div id='inbody'>
      <h1>Play</h1>
    </div>
    <img src="https://www.nicepng.com/png/detail/59-590244_plastic-bottles-clipart-full-water-bottle-clipart-png.png" width="100px" height="auto"></img>
    <img src="https://www.pinclipart.com/picdir/middle/15-156478_big-image-clip-art-plastic-bag-png-download.png" width="100px" height="auto"></img>
    <img src="https://www.pngitem.com/pimgs/m/55-554059_transparent-background-banana-peel-cartoon-hd-png-download.png" width="100px" height="auto"></img>
    <div class="can">

    </div>
  </body>
  );
}