import React, { Component } from 'react';
import Header from './header';
import Intro from './intro';
import About from './about';


export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Intro />
        <About />
   
      </div>
    );
  }
}
