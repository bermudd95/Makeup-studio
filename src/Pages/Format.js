import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Format = () => {
  return (
    <>
      <div className="w-full bg-gray-300 p-5">
        <div className="m-auto flex flex-row justify-between items-center">
          <h1 className="font-bold p-4 bg-pink-400 text-black border-solid border-2 border-black rounded-lg hover:bg-orange-200">
            <Link to="/">Wendy's Makeup Studio</Link>
          </h1>
          <ul className="font-bold hover:text-red-300">
            <Link to="/About">About</Link>
          </ul>
          <ul className='font-bold hover:text-red-300'>
            <Link to="/Packages">Packages</Link>
          </ul>
          <ul className='font-bold hover:text-red-300'>
            <Link to="/Contact">Contact</Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Format