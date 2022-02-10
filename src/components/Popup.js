import React from 'react'
import {randomWord} from '../data'

export const Popup=({setPlayable,setWrongLetters,setCorrectLetters,setSelectedWord})=> {
    const handleClick=()=>{
        setPlayable(true)
        setCorrectLetters([])
        setWrongLetters([])
        setSelectedWord(randomWord)
    }
  return (
    <div className="row justify-content-center">
      <button className="btn btn-primary col-3 m-2" onClick={handleClick}>play again</button>
    </div>
  )
}
