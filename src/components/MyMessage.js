import React from 'react'

const MyMessage = ({msg}) => {
    if( msg.attachments.length > 0){
        return(
            <img
                src= {msg.attachments[0].file}
                alt='message-attachment'
                className='message-image'
                style={{float:'right'}}
            />
        )
    }
  return (
    <div className='message'
         style={{float:'right', marginRight:'18px', color:'white', backgroundColor: '#3B2A50'}} >
               {msg.text}
    </div>
  )
}

export default MyMessage