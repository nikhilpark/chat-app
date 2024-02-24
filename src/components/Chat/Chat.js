import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import InputBox from '../InputBox/InputBox';
import TextContainer from '../TextContaier/TextContainer';

import './Chat.css';



let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://chatappbackend-96ffb46da5b8.herokuapp.com/'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, () => {
      
    });

    return () => {
      socket.emit('disconnect');

      socket.off();

    }
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages name={name} messages={messages}/>
          <InputBox message={message} setMessage = {setMessage} sendMessage = {sendMessage} />
          </div>
          <div>
          <TextContainer users={users} />   
          </div>
      </div>
           
  
  );  
}

export default Chat;
