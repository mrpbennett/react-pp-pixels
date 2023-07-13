import React from 'react'
import TagManager from 'react-gtm-module'
import {Link} from 'react-router-dom'

export default function Button() {
  // Here we have a click handle that will fire the datalayer layer off once the button has been clicked
  const handleClick = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'button_click',
      },
    })
  }

  return (
    <Link to="/thirdpage">
      <button
        id="page-3-btn"
        onClick={handleClick}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-md"
      >
        Take Me To Page 3
      </button>
    </Link>
  )
}
