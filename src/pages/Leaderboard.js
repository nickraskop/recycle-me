import React from 'react';
import firebase from '.././firebase';
import './Learn.css';

import {useState, useEffect} from 'react';
export default function Leaderboard() {
  
  const ref = firebase.firestore().collection("trash")
  console.log(ref);

  // const Push = () => {
  //   ref("trash").set({
  //     id : "12",
  //    item : "uhh",
  //   }).catch(alert);
  // }

  function FbCreate() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")

    function createDoc(newDataObj){
      ref
      .doc()
      .set(newDataObj)
      .catch((err) => {
        alert(err)
        console.error(err);
      })
    }
  }

  const [data,setdata]= useState([])
  const [loader, setloader] = useState(true)

  function getData(){
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setdata(items)
      setloader(false)
    })
  }

  useEffect(() =>{
    getData()
    console.log(data);
  },[])
  return (
    <body>
    <ul>
      <li><a href="play">Play</a></li>
      <li><a href="about">About</a></li>
      <li><a href="learn">Learn</a></li>
      <li><a href="leaderboard">Leaderboard</a></li>
    </ul>
    {loader === false && (data.map((dev) =>(
        <div key={dev.id}> 
        <p>Item: {dev.name}</p>
        </div>
      )))}

      
    
    <div id='inbody'>
      <h1>Leaderboard</h1>
    </div>
  </body>
  );
}