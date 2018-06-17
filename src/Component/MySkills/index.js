import React from 'react';

let MySkills=({skill})=>{
    return (
        <div className="section">
            <div className="container">
                <div className="section-bg section-header-bg"></div>
                <div className="section-bg section-content-bg"></div>
                <header className="header">
                    <div className="content-box">
                        <h2 className="title">技能&nbsp;/&nbsp;
                            <small><i>Skills</i></small>
                        </h2>
                        <div className="description">我所掌握的工具和技术栈</div>
                    </div>
                </header>
                <div className="section-content">
                    <div className="row skill">
                        {skill.map((i,n)=>(
                            <div className="col-md-6" key={`${n}skill`}>
                                <div className="item">
                                    <div className="text-info">
                                        <span className="num text-light">{i.percent}</span>{i.name}
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar wow progressShow" style={{width:i.percent}}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MySkills