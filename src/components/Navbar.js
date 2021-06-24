import React from 'react'
// useStaticQuery => to be able to do a static query (we import the hook)
import { Link, graphql, useStaticQuery } from 'gatsby'

export const Navbar = () => {
    // Making the static query
    // Remove "SiteInfo" if it is used in the index-fil
    const data = useStaticQuery(graphql`
        query  { 
            site {
             siteMetadata {
               title
    }
  }
}
    `)

    // Destructure the title from data
    const { title } = data.site.siteMetadata;


    return (
        <nav>
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}
