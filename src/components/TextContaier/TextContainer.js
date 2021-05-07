import React from 'react'

import './TextContainer.css'
import onlineIcon from '../../icons/onlineIcon.png'

export default function TextContainer({users}) {
    console.log(users)
    return (
        <div className="textContainer">
          {
      users
        ? (
          <div className="inrCont">
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                  <ul>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <li>
                    {name}
                    </li>
                    
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
                </ul>
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
    )
}
