import React from 'react'

export const Notification=({notification,setNotification,width,height})=> {
    const backStyle={
       position:'fixed',
        top:'20px',
        width:`${width}px`,
        height:`${height}px`,
        backgroundColor: 'rgb(52, 73, 94,0.8)',
    }
    //console.log('notif',width,height)

    const notificationStyle={
            maxWidth:'50%',
            height: '4rem',
            margin:'0 auto',
            padding:'1rem',
            border:'1px solid white',
            borderRadius:'10px',
            backgroundColor:'rgb(109, 109, 221)',
            textAlign:'center',
    }
    const handleClick=(e)=> {
        console.log(e.target.classList)
        if(e.target.classList.contains('back'))
            setNotification('')
    }
  return (
    <div className='back' style={backStyle} onClick={handleClick}>
     <div style={notificationStyle}>{notification}</div> 
    </div>
  )
}
