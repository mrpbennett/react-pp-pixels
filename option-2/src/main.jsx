import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from '../src/App'
import './index.css'

// Routes
// https://reactrouter.com/en/6.14.1/start/tutorial
import ErrorPage from './error-page'
import SecondPage from './routes/secondpage'
import ThirdPage from './routes/thirdpage'

// Google Tag Manager React Module
// https://www.npmjs.com/package/react-gtm-module
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-ML6HK53',
}

TagManager.initialize(tagManagerArgs)

/*

Here the way we're using React Router to create seperate routes each object is a new route to a page. 
We import the pages as components and assign them to the element and give them a path, this path will have to match what you have in your navbar

For example: <Link to={`/secondpage`}>2nd Page</Link>

We're using Link here so we can grab the component from the server instead of requesting it from the client.

*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/secondpage',
    element: <SecondPage />,
  },
  {
    path: '/thirdpage',
    element: <ThirdPage />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
