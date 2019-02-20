
import React from "react";
import { Link } from "gatsby"
import "./nav.scss"


const Nav = ({ siteTitle }) => (
  <nav>
    <div>
        <Link className="kit-brand"><h2>Brand</h2></Link>
        <Link to="/get-started/">Get Started </Link>
        <Link to="/design-components/">Design</Link>
        <Link to="/layout-components/">Layout</Link>
        <Link to="/functional-components/">Functional </Link>
        <Link to="/downloads/">Downloads </Link>

    </div>
  </nav>
)

export default Nav
