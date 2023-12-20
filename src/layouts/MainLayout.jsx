import React from 'react'

import NavBar from '../components/navbar'

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-8 container mx-auto prose lg:prose-xl">
        {children}
      </main>
      <footer className="bg-gray-200 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} : <a href="https://github.com/mrpbennett/react-pp-pixels">Full repo here</p>
      </footer>
    </div>
  )
}

export default Layout
