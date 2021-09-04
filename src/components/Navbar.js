import React from 'react';


import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


// props are just like variable we declare any thing props and send the diffrent vage page by page 

const Navbar = (props) => {
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to = "/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to = "/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/about">{props.about}</Link>
            </li>
            
            
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        </div>
      </div>
    </nav>

    );
}

export default Navbar;


// this is just to check that entered value would not be non-string if it is then it will throw an error 

Navbar.propTypes = {title : PropTypes.string,
                    about : PropTypes.string,}
         
                    
// if props are not set then these default props will be set automatically            
Navbar.defaultProps = {title : 'set title here',
                        about : 'set about text'}        



