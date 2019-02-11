import { Link } from "gatsby"
import "./nav.scss"
import React from "react"

const Nav = ({ siteTitle }) => (
  <nav>
    <div>
        <Link><h2>Brand</h2></Link>
        <Link to="">Layouts</Link>
        <Link to="/page-2">Templates</Link>
        <Link to="/page-3">Fonts</Link>
        <Link to="/page-4">Components</Link>
        <Link to="/page-2">Downloads</Link>
    </div>
  </nav>
)

export default Nav
