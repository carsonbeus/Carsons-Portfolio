import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return(
            <div className="portfolioPage">
                <div className="portfolioPage__portfolioWrapper">
                    <div className="portfolioPage__portfolioWrapper__contentGrid">
                        
                        <h1>Portfolio</h1>
                        
                        <div className="portfolioPage__portfolioWrapper__contentGrid__portfolioWrapper">
                            <div className="portfolioItem">
                            {/* import image of project */}
                                <div className="portfolioItem__title">madlibs</div>
                                <div className="portfolioItem__dsc">word game made with cool styles</div>
                                <div className="portfolioItem__icon">linkedIn GitHub</div>
                                <div className="portfolioItem__link">heroku</div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        )
  }
}
export default Portfolio;