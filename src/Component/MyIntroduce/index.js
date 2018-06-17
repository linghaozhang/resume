import React from 'react';

let MyIntroduce=({introduce})=>{
    return (
        <div className="section">
            <div className="container">
                <div className="section-bg section-header-bg"></div>
                <div className="section-bg section-content-bg"></div>
                <header className="header">
                    <div className="content-box">
                        <h2 className="title">介绍&nbsp;/&nbsp;
                            <small><i>Intro</i></small>
                        </h2>
                        <div className="description">介绍一些个人基本情况</div>
                    </div>
                </header>
                <div className="section-content">
                    <div className="intro">
                        {(introduce.content||[]).map((i,n)=><p key={`${n}intro`}>{i}</p>)}
                    </div>
                    <div className="technology">
                        <ul className="inline">
                            <li><b>使用过的技术栈</b></li>
                            {(introduce.tech||[]).map((i,n)=><li key={`${n}tech`}>{i}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MyIntroduce