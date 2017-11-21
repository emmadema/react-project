// src/components/Header.js
import React, {Component} from 'react';
import {Link} from 'react-router';

//class and component are basically the same thing
class Header extends Component{
  render(){
    return (
    	//this just needs to add link
      <header>
        <h1><Link to={'/todos'}>React Todos</Link></h1>
      </header>
    )
  }
}

export default Header