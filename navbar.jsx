import React from 'react'
import logo from "../assets/SPACE.png"
const navbar = () => {
  return (
    <div>
        <div className="container">
      <div className="nav flex ">
          <div className="flex items-center gap-4 font-bold text-2xl">
            <img src={logo} alt="" className='w-10' />
            <span>SpaceX</span>
          </div>
          <div className="text-white">
            <ul className="flex items-center gap-6 text-xl">
                <li><a href="">About</a></li>
                <li><a href="">Technology</a></li>
                <li><a href="">Galaxy</a></li>
                <li><a href="">Satelite</a></li>
            </ul>
          </div>
      </div>
      </div>
    </div>
  )
}

export default navbar
