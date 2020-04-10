import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import AppContext from "./context"
import '@fortawesome/fontawesome-free/css/all.css'

function Top(props) {
  const context = React.useContext(AppContext);

  return (
    <bs.Navbar bg="light" expand="lg" >
      <Link to="/">
        <bs.Navbar.Brand>
          <i class="fas fa-sun"></i>
          GoFundMe Analytics
        </bs.Navbar.Brand>
      </Link>

      <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <bs.Navbar.Collapse id="basic-navbar-nav">
        <bs.Nav className="mr-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create" className="nav-link">Create</Link>
          <Link to="/campaign" className="nav-link">Campaign</Link>
          {/* <Link to="/search" className="nav-link">Search</Link> */}
        </bs.Nav>

        {/* <bs.Nav>
          <bs.NavDropdown title="Welcome" className='alignright'>
            <bs.NavDropdown.Item>My Account</bs.NavDropdown.Item>
            <bs.NavDropdown.Divider />
            <bs.NavDropdown.Item>Logout</bs.NavDropdown.Item>
          </bs.NavDropdown>
        </bs.Nav> */}

      </bs.Navbar.Collapse>
    </bs.Navbar>
  )
}
export default Top