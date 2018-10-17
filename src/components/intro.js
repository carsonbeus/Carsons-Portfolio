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
                    Web, React and Python Developer
                </div>
                <div className="introWrapper__socialIcons">
                    LinkedIn icon, GitHub icon
                </div>
            </div>

        )
    }
}
export default Intro;