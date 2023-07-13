import React from 'react'
import TagManager from 'react-gtm-module'
import {Link} from 'react-router-dom'

export default function Button({id, page_url, children}) {
  // Here we have a click handler that will fire the datalayer layer off once the button has been clicked
  const handleClick = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'button_click',
      },
    })
  }

  /*
    This button is as simple as a modular / dynamic button can get. We're passing the props children here enabling us
    to pass anything as button text here. Like so:

    <Button>Some Button Text</Button>

    We're also passing two more props "id" and "page_url" this will allow you to assign an ID to the button when using it. This will allow you
    to use GTM to fire a certain pixel on a certain button with a certain ID. Enabling you to use multiple conversion pixels
    on different buttons. With the page_url prop you can pass any url linking to another page.

    This way you can use this button through out your site but only really change the id, page_url and children props.

    <Button id="some-id" page_url="/thirdpage">Some Button Text</Button>
  */

  return (
    <Link to={page_url}>
      <button
        id={id}
        onClick={handleClick}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-md"
      >
        {children}
      </button>
    </Link>
  )
}
