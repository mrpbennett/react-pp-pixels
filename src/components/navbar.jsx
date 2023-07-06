import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.343 15.657a7.965 7.965 0 01-1.657-4.899A7.978 7.978 0 018 2c1.978 0 3.762.73 5.143 1.935a7.968 7.968 0 011.414 11.314A7.963 7.963 0 0110 18a7.963 7.963 0 01-5.657-2.343zM12 6a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm5 8a1 1 0 100-2 1 1 0 000 2zM7 12a1 1 0 100-2 1 1 0 000 2zm5-4a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-white font-semibold">PulsePoint</span>
        </div>
        <div>
          <Link to={`/`} className="text-white hover:underline ml-4">
            Home Page
          </Link>
          <Link to={`/secondpage`} className="text-white hover:underline ml-4">
            Second Page
          </Link>
          <Link to={`/thirdpage`} className="text-white hover:underline ml-4">
            Third Page
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
