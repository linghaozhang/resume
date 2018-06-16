import React from 'react';
import Cube from './../Cube/index'

let MyBaseInfo=()=>{
    return (
        <div className="section section-header">
            <div className="section-bg section-header-bg"></div>
            <div className="section-bg section-content-bg"></div>
            <div className="container">
                <header className="header">
                    <div className="header-box">
                        <div className="avatar wow inShow no-print">
                            {/*<img src="/static/images/logo.jpg" alt="logo" className="img-responsive"/>*/}
                            <Cube/>
                        </div>
                        <h1 className="name text-center wow inShow no-print">wesley return</h1>
                        <h1 className="name text-center hide show-print-block">wang</h1>
                    </div>
                </header>
                <div className="section-content">
                    <div className="content-box">
                        <div className="name-slogan">
                            <h2 className="wow inShow no-print" data-wow-delay="0.1s">
                                            <span
                                                className="text-light">wesley</span>&nbsp;userInfo.firstName
                            </h2>
                            <div className="description wow inShow"
                                 data-wow-delay="0.15s">userInfo.slogan
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="item wow inShow" data-wow-delay="0.3s">
                                        <h4>性别</h4>
                                        <div className="info">userInfo.sex</div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="item wow inShow" data-wow-delay="0.45s">
                                        <h4>年龄</h4>
                                        <div className="info">calcDate(userInfo.birthday)</div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="item wow inShow" data-wow-delay="0.5s">
                                        <h4>学历</h4>
                                        <div className="info">userInfo.education</div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <a className="item wow inShow"
                                       data-wow-delay="0.55s" target="_blank">
                                        <h4>经验</h4>
                                        <div
                                            className="info">userInfo.exp[0] + (calcDate(userInfo.workSince)
                                            - 1) + userInfo.exp[1] + calcDate(userInfo.workSince) +
                                            userInfo.exp[2]
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="item wow inShow" data-wow-delay="0.6s">
                                        <h4>Phone</h4>
                                        <address className="info">userInfo.phone</address>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="item wow inShow" data-wow-delay="0.65s">
                                        <h4>QQ</h4>
                                        <div className="info">userInfo.qq.number</div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <a className="item wow inShow" data-wow-delay="0.7s" target="_blank">
                                        <h4>Website</h4>
                                        <div className="info">userInfo.website</div>
                                    </a>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <a className="item wow inShow" data-wow-delay="0.75s" target="_blank">
                                        <h4>Github</h4>
                                        <div className="info">userInfo.github</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyBaseInfo