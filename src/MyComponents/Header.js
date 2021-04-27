import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";



export default function Header(props) {
  const headerStyle = {
    hover: "2:1",
    borderRadius: "15px",
    background: "linear-gradient(#ff0084, #2e1437)",
    }
    return (
      
        <nav id="headerStyle" className="navbar navbar-expand-lg navbar-light bg-#2FB4EA" style={headerStyle}>
  <div className="container-fluid">
  <strong><Link className="navbar-brand" to="/">{props.title}</Link></strong>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><strong>Home</strong></Link>
        </li>
        <li className="nav-item">
          
          <Link className="nav-link" to="/about"><strong>About</strong></Link>
        </li>
      
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn  btn-success"  type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    )
}

Header.defaultProps = {
  title: "Your Title Here"
}

Header.propTypes = {
  title: PropTypes.string
}
