import React, { useContext } from 'react'
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { ChatContext } from '../context/ChatContext'

// const sidebarswitch = () => {
//   console.log('hello')
// }

const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className="chat">
      <div className="chatinfo">
        <span>{data.user?.displayName}</span>
        <div className="chaticons">
          {/* <GiHamburgerMenu onClick={sidebarswitch} /> */}
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
