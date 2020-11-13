import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className='nav-wrapper'>
            <a href='#!' className='brand-logo'>
              Zentickets
            </a>
            <a href='#!' data-target='mobile-menu' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='#!'>Home</a>
              </li>
              <li>
                <a href='#!'>All tickets</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className='sidenav' id='mobile-menu'>
          <li>
            <a href='#!'>Home</a>
          </li>
          <li>
            <a href='#!'>All tickets</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
