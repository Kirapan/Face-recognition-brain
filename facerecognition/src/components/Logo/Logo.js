import React from 'react'
import Tilt from 'react-tilt'//cool library for tilting hovering effect
import brain from './brain.png'//Google "royalty free icons"
import './Logo.css'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2 center" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3" >
          <img style={{paddingTop: '5px'}} src={brain} alt="logo"/>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo