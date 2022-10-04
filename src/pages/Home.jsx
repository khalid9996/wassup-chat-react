import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { GiHamburgerMenu } from 'react-icons/gi'

const Home = () => {
  const [sidebarSwitch, setSidebarSwitch] = useState(true)

  return (
    <>
      <div className="uphome">
        <GiHamburgerMenu
          className="burger"
          onClick={() => {
            setSidebarSwitch(sidebarSwitch ? false : true)
          }}
        />
        <p>WhatsApp</p>
      </div>

      <div className="home">
        <div className="container">
          {sidebarSwitch && <Sidebar />}
          <Chat />
        </div>
      </div>
    </>
  )
}

export default Home
