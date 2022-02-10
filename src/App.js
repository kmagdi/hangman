import React,{useState,useEffect} from 'react';

import './App.css';
import {Figure} from'./components/Figure'
import {Word} from './components/Word'
import { Notification } from './components/Notification';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {randomWord,abc} from './data'
import useDimensions from "react-cool-dimensions";
import {WrongLetters} from './components/WrongLetters'
import {Popup} from './components/Popup'


function App() {
  const [selectedWord,setSelectedWord]=useState(randomWord)
  const [correctLetters,setCorrectLetters]=useState([])
  const [wrongLetters,setWrongLetters]=useState([])
  const [notification,setNotification]=useState('')
  const [playable,setPlayable]=useState(true)

  
  console.log(selectedWord)
  
  const { observe,unobserve, width, height } = useDimensions({
    onResize: ({ observe }) => {
      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });
  useEffect(() => {observe()},[])

  return (
    <div className="container-md p-2 " ref={observe}>
      <h1 className="text-center p-2">Akasztófa</h1>
      <h3 className="text-center p-2">Találd meg az elrejtett szót, adj meg egy betűt! </h3>
      <div className="row text-center">
          <div className="col ">
              <Figure wrongLetters={wrongLetters}/>
          </div>
          <div className="col">
            {wrongLetters.length>0 && <WrongLetters wrongLetters={wrongLetters}/>}
            <Word selectedWord={selectedWord} abc={abc} 
              correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} 
              setNotification={setNotification}
              wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}
              playable={playable} setPlayable={setPlayable}
             />
          </div>
      </div>
     {notification && <Notification notification={notification} setNotification={setNotification} height={height} width={width}/>}
    {!playable && <Popup setPlayable={setPlayable} setCorrectLetters={setCorrectLetters} setWrongLetters={setWrongLetters} setSelectedWord={setSelectedWord}/>}
    {/* Hi! My width is {width}px and height is {height}px*/}
    </div>
  );
}

export default App;
