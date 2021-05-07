import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';
export default function Message({message:{user, text}, name}) {

    let isSentByCurrentUser = false ;
    console.log(name)
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ?(
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className = "messageBox backgroundBlue">
                    <p className="messagetext colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
            
                <div className = "messageBox backgrooundLight">
                    <p className="messagetext colorDark">{text}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    )
}
