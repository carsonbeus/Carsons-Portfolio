import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return(
            <div className="introWrapper">
                <div className="introWrapper__nameWrapper">
                    Carson
                </div>
                <div className="introWrapper__description">
                    Front End Developer, React Developer,
                </div>
                <div className="introWrapper__socialIcons">
                    LinkedIn, GitHub
                </div>
            </div>

        )
    }
}
export default Intro;