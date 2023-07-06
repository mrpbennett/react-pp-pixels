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
