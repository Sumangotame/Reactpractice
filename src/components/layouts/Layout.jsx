import React from 'react'
import Header from '../Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer'
import UserContextProvider from '../context/UserContextProvider'

function Layout() {
        const location = useLocation()
        return (
                <>
                        <Header />
                        {location.pathname === "/" && (<div>
                                <h1>Welcome to the Homepage</h1>
                                <p>This is the main content for the homepage.</p>
                        </div>)
                        }

                        <Outlet />
                        <Footer />
                </>)
}

export default Layout