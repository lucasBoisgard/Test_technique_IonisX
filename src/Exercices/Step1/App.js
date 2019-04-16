/**
 * Here just show us, wuthout try the code.
 * How you go to fixe and improuve this components
 * 
 * and say what is wrong with him 
 */

import React, { Component } from 'react'

export default class App extends Component {   
   render() {
      return (
        <p>Hello {this.props.name || 'Anonymous'}</p>
      );  
    }
  }