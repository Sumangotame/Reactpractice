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
        <><div className=' rounded'>
            <Link to="root" className={`link no-underline  mx-3 px-10 btn   ${activeLink === 'root' ? 'bg-purple-500 hover:bg-purple-500 text-black' : 'bg-pink-500'}`} onClick={() => handleClick('root')}>form</Link >
            <Link to="home" className={`link  mx-3 px-10 no-underline  btn ${activeLink === "home" ? 'bg-purple-500 hover:bg-purple-500 text-black' : 'bg-pink-500'}`} onClick={() => handleClick('home')}>List</Link>
            <Link to="todo" className={`link mx-3 px-10 no-underline btn   ${activeLink === 'todo' ? 'bg-purple-500 hover:bg-purple-500 text-black' : 'bg-pink-500'}`} onClick={() => handleClick('todo')}>todo</Link>
        </div>
        </>
    )
}

export default Header