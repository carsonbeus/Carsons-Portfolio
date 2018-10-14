import React, { Component } from 'react';
import Header from './header';
import Hero from './heroHome';


export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Hero />
      </div>
    );
  }
}
