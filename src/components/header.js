import React, { Component } from 'react';
// import img from '../style/images/belogo.jpg';

class Header extends Component {
    render() {
        return(
            <div className="header">

                <div className='header__leftColumn'>
                    <div className="header__leftColumn__align">
                        <div>color change</div>
                    </div>
                </div>

                <div className='header__centerColumn'>
                    <div className='header__centerColumn__centerHeader'>
                        <div>About Me</div>                        
                        <div>Projects</div>
                        <div>Contact</div>
                    </div>
                </div>
            
            </div>
        )
    }
}
export default Header;

{/* <div className="header__leftColumn__align__myName">Carson Beus</div>
    <div className="jobDescription">React | Python Developer</div> */}

// height: 200px;
// display: flex;
// justify - content: center;
// align - items: center;