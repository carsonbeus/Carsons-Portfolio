import React, { Component } from 'react';
// import img from '../style/images/belogo.jpg';

class Header extends Component {
    render() {
        return(
            <div className="header">

                <div className='header__leftColumn'>
                    <div className="header__leftColumn__align">
                        {/* <div>color change</div> */}
                    </div>
                </div>

                <div className='header__rightColumn'>
                    <div className="header__rightColumn__item">About</div>                        
                    <div className="header__rightColumn__item">Projects</div>
                    <div className="header__rightColumn__item">Contact</div>
                </div>
            
            </div>
        )
    }
}
export default Header;
