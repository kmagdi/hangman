import React, { useEffect } from 'react'

export const Word=({selectedWord,correctLetters,setCorrectLetters,abc,setNotification,setWrongLetters,wrongLetters,playable,setPlayable})=> {
  const uniqueLetters = [...new Set(selectedWord.slice(''))]
console.log('egyedi:',uniqueLetters.length)
  
  useEffect(()=>{
    window.addEventListener('keydown',handleKeyDown)
    return ()=>window.removeEventListener('keydown',handleKeyDown)
  },[selectedWord,correctLetters,wrongLetters,playable])

  const handleKeyDown = (e)=>{
    console.log(e.key)
    const letter=e.key.toLowerCase()
    if(playable && abc.includes(letter.toUpperCase()) ){
      if(selectedWord.includes(letter) && correctLetters.includes(letter)){
        console.log('ez már volt')
        setNotification('ezt a betű már volt')
      }else if (!selectedWord.includes(letter)){
          if(wrongLetters.includes(letter))
            setNotification('ez a betű már volt')
          else{
            setWrongLetters([...wrongLetters,letter])
            setNotification('rossz betű')
            if(wrongLetters.length===5){
              setNotification(`Vége a játéknak!☹️`)
              setPlayable(false)
           }
          }
      }else{
        setCorrectLetters([...correctLetters,letter])
        //meg kell nézni, hogy minden betű ki van-e már találva
        console.log('miért:',correctLetters.length,uniqueLetters.length)
        if(correctLetters.length+1===uniqueLetters.length){
           setNotification(`Vége a játéknak!🙂`)
           setPlayable(false)
        }
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
