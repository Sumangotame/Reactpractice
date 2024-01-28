import React from 'react'

import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {

  return (
    <>
      <Header />
      <h1> Welcome to the site of react practice</h1>
      <Footer />
    </>
  )
}

export default App