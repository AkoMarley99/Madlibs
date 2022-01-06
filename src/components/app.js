import React, { Component } from 'react';


import Header from './header';
import Footer from './footer';
import Template from './template';
import Finished from './finished-madlib';
import UserInput from './userinput';
export default class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Header/>
        <Template/>
        <Footer/>

      </div>
    );
  }
}
