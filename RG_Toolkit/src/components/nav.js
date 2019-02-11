import { Link } from "gatsby"
import "./nav.scss"
import React from "react"

const Nav = ({ siteTitle }) => (
  <nav>
    <div>
        <Link><h2>Brand</h2></Link>
        <Link to="/get-started/">Get Started </Link>
        <Link to="/design-components/">Design</Link>
        <Link to="/layout-components/">Layout</Link>
        <Link to="/functional-components/">Functional </Link>
        <Link to="/downloads/">Downloads </Link>

    </div>
  </nav>
)

export default Nav
