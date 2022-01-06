import React, { Component } from 'react';


import Header from './header';
import Footer from './footer';
import Finished from './finished-madlib';
import UserInput from './userinput';
export default class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Header/>
        <h1>MadLibs content</h1>
        <Footer/>

      </div>
    );
  }
}
