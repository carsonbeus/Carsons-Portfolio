import React, { Component } from 'react';
import img from '../style/images/belogo.jpg';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className='header__leftColumn'>
                    <div className='header__leftColumn__icon'>
                        {/* <i className='fas fa-mobile'></i> */}
                        <img src={require('../style/images/belogo.jpg')} width="300" height="300" />
                    </div>
                </div>

                <div className='header__centerColumn'>
                    <div className='header__centerColumn__centerHeader'>
                        <h2>Projects</h2>
                        <h2>About Me</h2>
                        <h2>Designs</h2>
                        <h2>Contact</h2>

                    </div>
                </div>


            </div>
        )
    }
}
export default Header;