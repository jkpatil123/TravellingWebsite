import React from 'react'
import { MenuItems } from './MenuItems'
import './NavbarStyles.css'
import { Component } from 'react';
import { Link } from 'react-router-dom';

 class Navbar extends Component {
    state={clicked:false};
    handleclick=()=>{
        this.setState({clicked: !this.state.clicked  })
    }
  render() {
    return (
        <div>
        <nav className='NavbarItems'>
          <h1 className='Navbar-logo'>Tripy</h1>
          <div className='menu-icons' onClick={this.handleclick}>
              <i className={this.state.clicked ?
               "fas fa-times" : "fas fa-bars"}></i>
              
          </div>
  
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((items,index)=>{
              return(
                  <li key={index}>
                 <Link className={items.cName} to={items.url}>
                 <i className={items.icon}>
                  
                 </i>{items.title}</Link>
                 

              </li>
              )
          })}
          <button>SignUp</button>
              
          </ul> 
        </nav>
      </div>
  
    )
  }
}



export default Navbar
