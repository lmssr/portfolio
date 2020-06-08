import Footer from './Footer/Footer';
import React, { Component } from 'react';
import {Link} from 'gatsby';
import {FaCartArrowDown} from 'react-icons/fa';

export default class Navbar extends Component {
  state ={
    navbarOpen:false,
    css: 'collapse navbar-collapse',
    links: [
    {
      id: 1,
      path: '/about',
      text: 'about.'
      }, {
      id: 2,
      path: '/work',
      text: 'work.'
      }, {
      id: 3,
      path: '/blog',
      text: 'blog.'
      }, {
      id: 4,
      path: '/contact',
      text: 'contact.'
      }
    ]
  }
  navbarHandler = () => {
    this.state.navbarOpen?this.setState(
      {navbarOpen:false, css:"collapse navbar-collapse"})
    :this.setState({
      navbarOpen:true,
      css:"collapse navbar-collapse show"
    })
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-end">
      <button
        className="navbar-toggler "
        type="button"
        onClick={this.navbarHandler}
      >
      <span className="navbar-toggler-icon " />
      </button>
      <div>
      <ul className="navbar-nav mx-auto ">
        {this.state.links.map(link =>{
          return(
            <li key={link.id} className="nav-item ">
              <Link to={link.path} className="nav-link">
                {link.text}
              </Link>
            </li>
            )
        })}
      </ul>
      </div>
      </nav>
    );
  }
}
