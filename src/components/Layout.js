import React from 'react'
import { Navbar } from './Navbar'
import '../styles/global.css'

// children represents anything that is nestedn inside the Layout component in index.js
// It grabs whatever is nested inside the Layout component. And outputs it wherever we deside to do that
export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright 2021 Web Warrior</p>
            </footer>
        </div>
    )
}

