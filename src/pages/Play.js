import React, { useEffect, useState, useRef } from 'react';
import { useEvent } from '../hooks';
import styled from 'styled-components';

// var obj = document.getElementById('recycle');
// obj.style.background = 'red';



export default function Play() {

  // document.addEventListener("keypress", function(event) {
  //   if (event.key === 'a') {
  //     setPos(pos-10);
  //   }
  // });


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
    // console.log('obj2 bottom:', obj2.style.bottom);
    if (x_collision && y_collision){
      obj1.style.visibility ='hidden';
      console.log('collides');
    }
    
    return x_collision && y_collision;
  }




  const [pos, setPos] = useState(document.body.clientWidth/2 - 100);

  const left = () => {
    console.log('in left');
    setPos(pos-50);
    // rec.style.background = 'purple';
    // setPos(document.getElementById('recycle').width)
    // document.getElementById('recycle').style.left =  val+"px";
    }
  
  const right = () => {
    setPos(pos+50);
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
    } else if (e.key === '1'){
      spawnTrash();
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
        <div id="recycle" style={{left: pos, bottom: 100}}/>
        <div id="test">hey</div>
        <div id="trash">hi</div>
      </div>
    </div>
  </body>
  );
}