import React from 'react'
import { Link } from 'gatsby'

export const Navbar = () => {
    return (
        <nav>
            <h1>Joakim Wretlind</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}
