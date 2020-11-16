import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo'>
              Zentickets
            </Link>
            <Link to='/' data-target='mobile-menu' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/ticket-list'>Tickets</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className='sidenav' id='mobile-menu'>
          <li>
            <Link className='sidenav-close' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='sidenav-close' to='/ticket-list'>
              Tickets
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
