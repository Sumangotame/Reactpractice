import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer'
import './Layout.css'

function Layout() {
        const location = useLocation()
        const [posts, setPosts] = useState('')
        // // useEffect(() => {
        // //         axios.get('http://localhost:8080')
        // // }
        // )
        return (
                <><div className="mx-24 p-10 w-auto bg-pink-500">
                        <Header />
                        {location.pathname === "/" && (<div>
                                <h1>Welcome to the Homepage</h1>
                                <p>This is the main content for the homepage.</p>
                        </div>)
                        }
                        <Outlet />
                        <Footer />
                </div>
                </>)
}

export default Layout