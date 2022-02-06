import React, { useEffect, useState, useRef } from 'react';
import { useEvent } from '../hooks';
import styled from 'styled-components';
import firebase from '.././firebase';

// var obj = document.getElementById('recycle');
// obj.style.background = 'red';


var score = 0;
export default function Play() {

const ref = firebase.firestore().collection("trash");

// const [score, setScore] = useState(0);

function FbCreate() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImagePath] = useState("")
}

  const [pos, setPos] = useState(document.body.clientWidth/2 - 100);

  // document.addEventListener("keypress", function(event) {
  //   if (event.key === 'a') {
  //     setPos(pos-10);
  //   }
  // });


  const spawnTrash = (type) => {

    const xpos = (Math.floor(Math.random() * document.body.clientWidth));
    var trash = document.createElement('div');
    trash.classList.add('trash');
    trash.style.left = xpos +"px";
    document.getElementById("bin-container").appendChild(trash);
    trash.style.top = "0px"


  }


  function checkCollision(obj1, obj2){
    // console.log('obj2',obj2);
    var x_collision = (parseInt(obj1.style.left.slice(0,-2)) <= (parseInt(obj2.style.left.slice(0,-2)) + 200)) && ((parseInt(obj1.style.left.slice(0,-2)) + 50) >= parseInt(obj2.style.left.slice(0,-2)));
    var y_collision = ((parseInt(obj1.style.top.slice(0,-2)) + 50) >= (500 - parseInt(obj2.style.bottom.slice(0,-2))));
    // console.log("X coll 1: " + parseInt(obj1.style.left.slice(0,-2)) + "<="+ (parseInt(obj2.style.left.slice(0,-2)) + 200) + "X coll 2: " + (parseInt(obj1.style.left.slice(0,-2)) + 50) + ">=" + parseInt(obj2.style.left.slice(0,-2)));
    // console.log("Y coll 1: " + (obj1.style.top) + "<=" + (obj2.style.top + obj2.style.height) + "Y coll 2: " + (parseInt(obj1.style.top.slice(0,-2)) + 50) + ">=" + (obj2.style.bottom.slice(0,-2)));
    // console.log('obj2 bottom:', obj2.style.bottom);
    if (x_collision && y_collision){
      obj1.remove();
      score++;
      document.getElementById('score').textContent = score;
    }
    
    return x_collision && y_collision;
  }



  const left = () => {
    if (pos - 50 <= 0){
      setPos(0);
    } else {
      setPos(pos-50);
    }
    // rec.style.background = 'purple';
    // setPos(document.getElementById('recycle').width)
    // document.getElementById('recycle').style.left =  val+"px";
    }
  
  const right = () => {
    if (pos + 50 + 200 >= document.body.clientWidth){
      setPos(document.body.clientWidth - 200);
    } else {
      setPos(pos+50);
    }
  }


  const fall = () => {
    var trashItems = document.getElementsByClassName('trash');
    for (var i = 0; i < trashItems.length; i += 1){
      var top = trashItems[i].style.top;
      top = (parseInt(top.slice(0,-2)) + 2) + "px";
      trashItems[i].style.top = top;
      checkCollision(trashItems[i], document.getElementById('recycle'));
    }
  }
  


  const handleKeyPress = (e) => {
    // the ' ' char actually represents the space bar key.
    if (e.key === 'a') {
      //console.log(checkCollision(document.getElementById('test'), document.getElementById('trash')));
      left();
    }
    else if (e.key === 'd') {
      right()
    } else if (e.key === ' '){
      document.getElementById('instructions').textContent = '';
      spawnTrash();
      setInterval(spawnTrash, 1000);
      setInterval(fall, 15);
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
        <br></br>
        <div id="score">{score}</div>
        <div class="center-screen" id="instructions">Press Space to Play!</div>
        <img src="https://static.wikia.nocookie.net/clubpenguin/images/d/da/Recycle_Bin.PNG/revision/latest?cb=20140329160620" id="recycle" style={{left: pos, bottom: 100}} />
      </div>
    </div>
  </body>
  );
}