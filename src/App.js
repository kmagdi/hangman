import React,{useState,useEffect} from 'react';

import './App.css';
import {Figure} from'./components/Figure'
import {Word} from './components/Word'
import { Notification } from './components/Notification';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {randomWord,abc} from './data'
import useDimensions from "react-cool-dimensions";


function App() {
  const [selectedWord,setSelectedWord]=useState(randomWord)
  const [correctLetters,setCorrectLetters]=useState([])
  const [wrongLetters,setWrongLetters]=useState([])
  const [notification,setNotification]=useState('')
  const [modalHeight,setModalHeight]=useState(0)
 
  const { observe,unobserve, width, height } = useDimensions({
    onResize: ({ observe }) => {
      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });
  useEffect(() => {observe()},[])

  return (
    <div className="container-md p-2" ref={observe}>
      <h1 className="text-center">Akasztófa</h1>
      <h3 className="text-center p-2">Találd meg az elrejtett szót, adj meg egy betűt! {selectedWord}</h3>
      <div className="row text-center">
          <div className="col ">
              <Figure />
          </div>
          <div className="col">
            <Word selectedWord={selectedWord} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} abc={abc} setNotification={setNotification}/>
          </div>
      </div>
     {notification && <Notification notification={notification} setNotification={setNotification} height={height} width={width}/>}

     Hi! My width is {width}px and height is {height}px
    </div>
  );
}

export default App;
