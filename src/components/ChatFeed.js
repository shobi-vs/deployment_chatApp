import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts = (msg, isMyMsg) => {
   
       return chat.people.map((person, index) => person.last_read === msg.id && (
            <div
                key = {`read_${index}`}
                className = "read-receipt"
                style={{
                        float: isMyMsg ? 'right' : 'left',
                        backgroundImage: `url(${person.person.avatar})`
                       }}
            />
        ))
}
    
    
    //to fetch all msgs
    const renderMessages = () => {

        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const msg = messages[key];
            const lastMsgKey = index  === 0 ? null : keys[index-1];
            const isMyMsg = userName === msg.sender.username;


  return (

    <div key={`msg_${index}`} style={{width: '100%'}} >
        <div className='message-block'>
            {
                isMyMsg ? <MyMessage msg={msg} /> : <TheirMessage  msg={msg} lastMsg={messages[lastMsgKey]} />
            }
        </div>
        
        <div className='read-receipts' style={{marginRight: isMyMsg ? '18px' : '0px', 
                                               marginLeft:  isMyMsg ? '0px' : '68px'}} >
             {renderReadReceipts(msg, isMyMsg)}
                                     
        </div>  

    </div>
          );
    })
}
    if(!chat)
        return 'Loading...';
return(
     <div className='chat-feed'>
        <div className='chat-title-container'>
            <div className='chat-title'>{chat.title} </div>
            <div className='chat-subtitle'>
                {chat.people.map((person) => `'${person.person.username}' `)}
            </div>
        </div>
        {renderMessages()}
        <div style={{height: '100px' }} />
        <div className='message-form-container'>
            <MessageForm {...props} chatId={activeChat} />
        </div>
       
     </div>

      );
}
export default ChatFeed