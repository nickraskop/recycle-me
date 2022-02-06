import React, { useEffect, useState, useRef } from 'react';
import { useEvent } from '../hooks';

export default function Play() {

  window.addEventListener('keydown', (e) => {  
    if (e.keyCode === 32 && e.target === document.body) {  
      e.preventDefault();  
    }  
  });

  const spawnTrash = (type) => {
    console.log('in func');
    const xpos = (Math.floor(Math.random() * document.body.clientWidth));
    var trash = document.createElement('div');
    trash.classList.add('trash');
    trash.style.left = xpos +"px";
    document.getElementById("bin-container").appendChild(trash);
    trash.style.top = "0px"
    console.log(trash.style.top);
  }

  function checkCollision(obj1, obj2){
    console.log('obj2',obj2);
    var x_collision = (parseInt(obj1.style.left.slice(0,-2)) <= (parseInt(obj2.style.left.slice(0,-2)) + 200)) && ((parseInt(obj1.style.left.slice(0,-2)) + 50) >= parseInt(obj2.style.left.slice(0,-2)));
    var y_collision = ((parseInt(obj1.style.top.slice(0,-2)) + 50) >= (500 - parseInt(obj2.style.bottom.slice(0,-2))));
    console.log("X coll 1: " + parseInt(obj1.style.left.slice(0,-2)) + "<="+ (parseInt(obj2.style.left.slice(0,-2)) + 200) + "X coll 2: " + (parseInt(obj1.style.left.slice(0,-2)) + 50) + ">=" + parseInt(obj2.style.left.slice(0,-2)));
    console.log("Y coll 1: " + (obj1.style.top) + "<=" + (obj2.style.top + obj2.style.height) + "Y coll 2: " + (parseInt(obj1.style.top.slice(0,-2)) + 50) + ">=" + (obj2.style.bottom.slice(0,-2)));
    if (x_collision && y_collision){
      obj1.remove();
      console.log('collides');
    }
    
    return x_collision && y_collision;
  }

  function delay(){
    console.log("1 second delay");
  }

  const [pos, setPos] = useState(document.body.clientWidth/2 - 100);

  const left = () => {
    console.log('in left');
    if (pos - 50 <= 0){
      setPos(0);
    } else {
      setPos(pos-50);
    }
  
  }
  
  const right = () => {
    if (pos + 50 + 200 >= document.body.clientWidth){
      setPos(document.body.clientWidth - 200);
    } else {
      setPos(pos+50);
    }
    console.log('in right');
  }

  const fall = () => {
    console.log('falling');
    var trashItems = document.getElementsByClassName('trash');
    console.log(trashItems);
    for (var i = 0; i < trashItems.length; i += 1){
      var top = trashItems[i].style.top;
      top = (parseInt(top.slice(0,-2)) + 10) + "px";
      trashItems[i].style.top = top;
      checkCollision(trashItems[i], document.getElementById('recycle'));
    }
  }
  setInterval(fall, 1000);
  
  const handleKeyPress = (e) => {
    // the ' ' char actually represents the space bar key.
    if (e.key === 'a') {
      console.log('a');
      //console.log(checkCollision(document.getElementById('test'), document.getElementById('trash')));
      left();
    }
    else if (e.key === 'd') {
      console.log('d');
      right()
    } else if (e.key === ' '){
      document.getElementById('instructions').textContent = '';
      spawnTrash();
      setInterval(spawnTrash, 3000);
    }
  };

  useEvent('keyup', handleKeyPress);

  return (
    <body>
    <ul>
      <li><a href="play">Play</a></li>
      <li><a href="about">About</a></li>
      <li><a href="learn">Learn</a></li>
      <li><a href="leaderboard">Leaderboard</a></li>
    </ul>
    <div id='inbody'>
      <h1>Catch the trash in the bin!</h1>
      <div id="bin-container">
      <div class="center-screen" id="instructions">Press Space to Play!</div>
        <img src="data:image/png;base64,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" id="recycle" style={{left: pos, bottom: 100}}/>
      </div>
    </div>
  </body>
  );
}