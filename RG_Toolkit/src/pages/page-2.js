import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Highlight from 'react-highlight'
import 'highlight.js/styles/vs2015.css'


const SecondPage = () => (
  
  <Layout>
    <SEO title="Page two" />
    <div>
    <h1>Design Components</h1>
    <h2>Render</h2>
    <pre>
      <div>
        <html>
          <header>
            <title>Title</title>
          </header>
          <body>
            Content
          </body>
        </html>
      </div>
    </pre>
    <h2>Code</h2>

    <Highlight className='html'>
    {`   
      <div>
      <html>
        <header>
          <title>Title</title>
        </header>
        <body>
          Content
        </body>
      </html>
    </div>
    `}
    </Highlight>

    <p>Welcome to page 2</p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
