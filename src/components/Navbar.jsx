import React from 'react'
import logo from "../assets/SPACE.png"
const Navbar = () => {
  return (
    <div>
        <div className="fixed top-0 right-0 w-full z-50 text-white bg-black/10 backdrop-blur-sm py-4 sm:py-4">
        <div className="container">
      <div className="flex justify-between items-center ">
          <div className="flex items-center gap-4 font-bold text-2xl mx-5 bg-black/3">
            <img src={logo} alt="" className='w-12' />
            <span>SpaceX</span>
          </div>
          <div className="text-white">
            <ul className="hidden md:flex items-center gap-6 text-xl py-4 sm:py-0">
                <li className='hover:font-semibold'><a href="">About</a></li>
                <li className='hover:font-semibold'><a href="">Technology</a></li>
                <li className='hover:font-semibold'><a href="">Galaxy</a></li>
                <li className='hover:font-semibold'><a href="">Satelite</a></li>
            </ul>
          </div>
          <div>
            <button className='text-black rounded-lg font-bold hover:scale-110 transition-all ease-in-out px-3 py-1 bg-white'>Login</button>
          </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
