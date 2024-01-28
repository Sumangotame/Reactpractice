import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <><Link to="root" className=" m-2 px-10 btn btn-secondary">Form</Link >
            <Link to="home" className="btn btn-secondary m-2 px-10">List</Link></>
    )
}

export default Header