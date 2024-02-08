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
        <><div>
            <Link to="root" className={`link no-underline text-black   mx-3 px-10 btn   ${activeLink === 'root' ? 'bg-purple-500 hover:bg-purple-500 text-white' : 'bg-white-500'}`} onClick={() => handleClick('root')}>form</Link >
            <Link to="home" className={`link  mx-3 px-10 no-underline text-black btn ${activeLink === "home" ? 'bg-purple-500 hover:bg-purple-500 text-white' : 'bg-white-500'}`} onClick={() => handleClick('home')}>List</Link>
            <Link to="todo" className={`link mx-3 px-10 no-underline text-black btn   ${activeLink === 'todo' ? 'bg-purple-500 hover:bg-purple-500 text-white' : 'bg-white-500'}`} onClick={() => handleClick('todo')}>todo</Link>
            <Link to="articles" className={`link   mx-3 px-10 no-underline text-black btn ${activeLink === 'articles' ? 'bg-purple-500 hover:bg-purple-500 text-white' : 'bg-white-500'}`} onClick={() => handleClick('articles')}>article</Link>
        </div>
        </>
    )
}

export default Header