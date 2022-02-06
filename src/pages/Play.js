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
  


  const handleKeyPress = (e) => {
    // the ' ' char actually represents the space bar key.
    if (e.key === 'a') {
      console.log('a');
      left();
    }
    else if (e.key === 'd') {
      console.log('d');
      right()
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
        <div id="recycle" style={{left: pos}}/>
      </div>
    </div>
  </body>
  );
}