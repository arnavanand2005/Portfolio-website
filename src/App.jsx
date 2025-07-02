import React from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Home from './components/Home'

export default function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 min-h-screen w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div>
        <Navbar />
        <Home />
        <Contact />
      </div>
    </>
  )
}
