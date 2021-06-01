import * as React from "react"
import PropTypes from "prop-types"
import '../styels/bootstrap.min.css'
import '../styels/style.css'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <nav className="navbar navbar-dark bg-success">
         <span className="navbar-brand mb-0 h1">Zaat.dev Blog</span>
      </nav>
      
    </div>
    
  </header>
) 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
