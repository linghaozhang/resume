import React from 'react';

let MyExperience=()=>{
    return (
        <div className="section">
            <div className="container">
                <div className="section-bg section-header-bg"></div>
                <div className="section-bg section-content-bg"></div>
                <header className="header">
                    <div className="content-box">
                        <h2 className="title">工作经验&nbsp;/&nbsp;
                            <small><i>Experience</i></small>
                        </h2>
                        <div className="description">不同时期简短的从业经历介绍</div>
                    </div>
                </header>
                <div className="section-content">
                    <div className="experience">
                        <div className="item" v-for="item in userInfo.experience">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="time">item.time</div>
                                    <div className="title">item.title</div>
                                    <div className="description">item.intro</div>
                                </div>
                                <div className="col-md-7">
                                    <div className="content">item.description</div>
                                    <div className="tips" v-for="tip in item.tips">
                                        <b>tip.title</b>
                                        <ul>
                                            <li v-for="list in tip.content">list</li>
                                        </ul>
                                    </div>
                                    <div className="technology" v-for="tech in item.technology">
                                        <b>tech.title</b>
                                        <ul className="inline">
                                            <li v-for="techItem in tech.content">techItem</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MyExperience