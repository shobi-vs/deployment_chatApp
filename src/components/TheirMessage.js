import React from 'react'

const TheirMessage = ({lastMsg, msg}) => {

    const isFirstMsgByUser = !lastMsg || lastMsg.sender.username !== msg.sender.username;
  return (
    <div className='message-row'>
        {isFirstMsgByUser && (
            <div
                className='message-avatar'
                style={{ backgroundImage: `url(${msg.sender.avatar})` }}
            />
        )}

        {msg.attachments.length > 0
        ? (
          <img
              src={msg.attachments[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ marginLeft: isFirstMsgByUser ? '4px' : '48px' }}
          />
        )
        : (
          <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMsgByUser ? '4px' : '48px' }}>
            {msg.text}
          </div>
        )}
    </div>
  )
}

export default TheirMessage