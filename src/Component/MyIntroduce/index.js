import React from 'react';

let MyIntroduce=()=>{
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
                        <p v-for="intro in userInfo.intro.content" v-html="intro"></p>
                    </div>
                    <div className="technology">
                        <ul className="inline">
                            <li><b>userInfo.intro.technology.title</b></li>
                            <li v-for="item in userInfo.intro.technology.content">item</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MyIntroduce