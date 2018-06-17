import React from 'react';

let MyExperience = ({experience}) => {
    return (
        <div className="section">
            <div className="container">
                <div className="section-bg section-header-bg"></div>
                <div className="section-bg section-content-bg"></div>
                <header className="header">
                    <div className="content-box">
                        <h2 className="title">工作项目经验&nbsp;/&nbsp;
                            <small><i>Experience</i></small>
                        </h2>
                        <div className="description">不同时期简短的从业经历介绍</div>
                    </div>
                </header>
                <div className="section-content">
                    <div className="experience">
                        {experience.map((i, n) => (<div className="item" key={`${n}experience`}>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="time">{i.time}</div>
                                    <div className="title">{i.title}</div>
                                    <div className="proTitle">{i.proTitle}</div>
                                    <div className="description">{i.intro}</div>
                                </div>
                                <div className="col-md-7">
                                    <div className="content">{i.description}</div>
                                    {i.tips.map((tip, idx) => (
                                        <div className="tips" key={`${idx}tip`}>
                                            <b>{tip.title}</b>
                                            <ul>
                                                {tip.content.map((list,num)=><li key={`${num}list`}>{list}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                    {i.technology.map((tech,index)=>(
                                        <div className="technology" key={`${index}technology`}>
                                            <b>{tech.title}</b>
                                            <ul className="inline">
                                                {tech.content.map((techItem,x)=>(<li key={`${x}techItem`}>{techItem}</li>))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MyExperience