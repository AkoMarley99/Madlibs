import React, { Component } from 'react';


import Header from './header';
import Footer from './footer';
import Template from './template';
import PartsOfSpeech from './parts-of-speech';
import Finished from './finished-madlib';
import UserInput from './userinput';
export default class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Header/>
        <div className="content-wrapper">
        <PartsOfSpeech/>
        <Template/>
        </div>
        
        <Footer/>

      </div>
    );
  }
}
