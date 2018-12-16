import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return(
            <div className="portfolioPage">
                <div className="portfolioPage__portfolioPageWrapper">
                    <div className="portfolioPage__portfolioPageWrapper__contentGrid">
                        <div className="portfolioPage__portfolioPageWrapper__contentGrid__title">
                            Portfolio
                        </div>

                        <div className="portfolioPage__portfolioPageWrapper__contentGrid__portfolioWrapper">
                            <div className="portfolioItem">
                                <div className="portfolioItem__img"><img className="portfolioImg" src={require("../../static/assets/images/christopher-gower-291246-unsplash.jpg")} /></div>
                                <div className="portfolioItem__title">madlibs</div>
                                <div className="portfolioItem__dsc">word game made with cool styles</div>
                                <div className="portfolioItem__icon">GitHub</div>
                                <div className="portfolioItem__link">heroku</div>
                            </div>
                            <div className="portfolioItem">
                                <div className="portfolioItem__img"><img className="portfolioImg" src={require("../../static/assets/images/james-mcdonald-556314-unsplash.jpg")} /></div>
                                <div className="portfolioItem__title">course scheduler</div>
                                <div className="portfolioItem__dsc">word game made with cool styles</div>
                                <div className="portfolioItem__icon">GitHub</div>
                                <div className="portfolioItem__link">heroku</div>
                            </div>
                            <div className="portfolioItem">
                                <div className="portfolioItem__img"><img className="portfolioImg" src={require("../../static/assets/images/jeff-sheldon-3228-unsplash.jpg")} /></div>
                                <div className="portfolioItem__title">Spera.io</div>
                                <div className="portfolioItem__dsc">word game made with cool styles</div>
                                <div className="portfolioItem__icon">GitHub</div>
                                <div className="portfolioItem__link">heroku</div>
                            </div>

                            <div className="portfolioItem">
                                <div className="portfolioItem__img"><img className="portfolioImg" src={require("../../static/assets/images/oliur-123817-unsplash.jpg")} /></div>
                                <div className="portfolioItem__title">BYU Gameday</div>
                                <div className="portfolioItem__dsc">word game made with cool styles</div>
                                <div className="portfolioItem__icon">GitHub</div>
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