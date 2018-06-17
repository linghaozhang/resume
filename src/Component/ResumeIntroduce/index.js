import React from 'react';

let ResumeIntroduce=({resumeIntroduce})=>{
    return(
        <div className="section">
            <div className="container">
                <div className="section-bg section-header-bg"></div>
                <div className="section-bg section-content-bg"></div>
                <header className="header">
                    <div className="content-box">
                        <h2 className="title">本项目介绍&nbsp;/&nbsp;
                            <small><i>ResumeIntro</i></small>
                        </h2>
                        <div className="description">介绍本简历的基本情况</div>
                    </div>
                </header>
                <div className="section-content">
                    <div className="intro">
                        {(resumeIntroduce.content||[]).map((i,n)=><p key={`${n}resume`}>{i}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ResumeIntroduce