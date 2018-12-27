import React, { Component } from 'react';
import Typewriter from './typewriter';

class Intro extends Component {

    constructor() {
        super()

        this.data = '["develop websites.", "develop mobile apps.", "build courses.", "develop apps", "design websites"]'
    }
    render() {
        return(
            <div className="introWrapper">
                <div className="introWrapper__name">
                    Hi, I'm Carson! 
                    {/* I like to develop web apps! */}
                </div>
                {/* <div className="typewriter">
                JS - ReactJS - ReactNative - SCSS - Node
                </div> */}
                <Typewriter data={this.data} className="home__title-writer" />
                <div className="introWrapper__socialIcons">
                    <i className="fab fa-linkedin"></i> <i className="fab fa-github-square"></i>
                </div>
            </div>

        )
    }
}
export default Intro;