import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <header className='header d-flex navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <Link to='/' className='nav-link'>
            Star DB
          </Link>
          <nav className='ml-auto'>
            <ul className='navbar-nav'>
              <li className='navbar-item'>
                <Link to='/people/' className='nav-link'>
                  People
                </Link>
              </li>
              <li className='navbar-item'>
                <Link to='/planets/' className='nav-link'>
                  Planets
                </Link>
              </li>
              <li className='navbar-item'>
                <Link to='/starships/' className='nav-link'>
                  Starships
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
