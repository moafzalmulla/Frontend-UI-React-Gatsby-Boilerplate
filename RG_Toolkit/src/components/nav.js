import { Link } from "gatsby"
import "./nav.scss"
import React from "react"

const Nav = ({ siteTitle }) => (
  <nav>
    <div>
        <Link><h2>Brand</h2></Link>
        <Link to="/page-2"> Design Components</Link>
        <Link to="/page-3">Layout Components</Link>
        <Link to="/page-4">GDS Components</Link>
        <Link to="/page-5">Components</Link>
        <Link to="/page-6">Downloads</Link>
    </div>
  </nav>
)

export default Nav
