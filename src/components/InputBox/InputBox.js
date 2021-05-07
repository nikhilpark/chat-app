import React from 'react'
import './InputBox.css'

export default function InputBox({ message, setMessage, sendMessage}) {
    return (
        <form className="form">
        <div className="outCont">
            
            <div className="inpCont">
                <input 
                className="form-control" 
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(event)=> setMessage(event.target.value)}
                onKeyPress = {(event) => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </div>
            <div className="btnCont">
                <button 
                className="btn-primary"
                onClick={(event) => sendMessage(event)}
                >Send</button>
            </div>
            
        </div>
        </form>
    )
}
