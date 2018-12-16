import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return(
            <div className="introWrapper">
                <div className="introWrapper__nameWrapper">
                    Hi, I'm Carson! 
                    {/* I like to develop web apps! */}
                </div>
                <div className="introWrapper__description">
                JS - ReactJS - ReactNative - SCSS - Node
                </div>
                <div className="introWrapper__socialIcons">
                    <i className="fab fa-linkedin"></i> <i className="fab fa-github-square"></i>
                </div>
            </div>

        )
    }
}
export default Intro;