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
                                <img className="portfolioImg" src="../../static/assets/images/alexandru-acea-582050-unsplash.jpg"></img>
                                <div className="portfolioItem__title">madlibs</div>
                                <div className="portfolioItem__dsc">word game made with cool styles</div>
                                <div className="portfolioItem__icon">GitHub</div>
                                <div className="portfolioItem__link">heroku</div>
                            </div>
                            <div className="portfolioItem">
                                <img className="portfolioImg" src="../../static/assets/images/alexandru-acea-582050-unsplash.jpg"></img>
                                <div className="portfolioItem__title">course scheduler</div>
                                <div className="portfolioItem__dsc">word game made with cool styles</div>
                                <div className="portfolioItem__icon">GitHub</div>
                                <div className="portfolioItem__link">heroku</div>
                            </div>
                            <div className="portfolioItem">
                                <img className="portfolioImg" src="../../static/assets/images/alexandru-acea-582050-unsplash.jpg"></img>
                                <div className="portfolioItem__title">sensual sandwich</div>
                                <div className="portfolioItem__dsc">word game made with cool styles</div>
                                <div className="portfolioItem__icon">GitHub</div>
                                <div className="portfolioItem__link">heroku</div>
                            </div>

                            <div className="portfolioItem">
                                <img className="portfolioImg" src="../../static/assets/images/alexandru-acea-582050-unsplash.jpg"></img>
                                <div className="portfolioItem__title">tesla</div>
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