import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    const [activeLink, setActiveLink] = useState(null)
    const handleClick = (a) => {
        console.log(a)
        setActiveLink(a)
    }

    return (
        <>
          
                <Link to="root" className={`link no-underline btn mx-3   ${activeLink === 'root' ? 'bg-purple-500 hover:bg-purple-500 text-black' : 'bg-white text-black'}`} onClick={() => handleClick('root')}>form</Link >
                <Link to="home" className={`link    no-underline mx-3 btn ${activeLink === "home" ? 'bg-purple-500 hover:bg-purple-500 text-black' : 'bg-white text-black'}`} onClick={() => handleClick('home')}>List</Link>
                <Link to="todo" className={`link  no-underline mx-3 btn   ${activeLink === 'todo' ? 'bg-purple-500 hover:bg-purple-500 text-black' : 'bg-white text-black'}`} onClick={() => handleClick('todo')}>Todo</Link>
           
        </>
    )
}

export default Header