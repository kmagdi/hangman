import React, { useEffect } from 'react'

export const Word=({selectedWord,correctLetters,setCorrectLetters,abc,setNotification})=> {
  
  useEffect(()=>{
    window.addEventListener('keydown',handleKeyDown)
    return ()=>window.removeEventListener('keydown',handleKeyDown)
  },[selectedWord,correctLetters])

  const handleKeyDown = (e)=>{
    console.log(e.key)
    const letter=e.key.toLowerCase()
    if(abc.includes(letter.toUpperCase()) ){
      if(selectedWord.includes(letter) && correctLetters.includes(letter)){
        console.log('ez már volt')
        setNotification('ezt a betű már volt')
      }else if (!selectedWord.includes(letter))
        setNotification('rossz betű')
      else{
        setCorrectLetters([...correctLetters,letter])
        //meg kell nézni, hogy minden betű ki van-e már találva
      }
    }
  }
  return (
    <div className="d-flex justify-flex-end">
      {/*selectedWord.split('').map((letter,i)=>
        <span className="letter">{letter}</span>
      )*/}
        {selectedWord.split('').map((letter,i)=>
        <span key={i} className="letter">{correctLetters.includes(letter)? letter : ''}</span>
      )}
    </div>
  )
}
