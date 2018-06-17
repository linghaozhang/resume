import React from 'react';
import Cube from './../Cube/index'
import {filter} from "../../Util/tool";

let MyBaseInfo = ({baseInfo}) => {
    return (
        <div className="section section-header">
            <div className="section-bg section-header-bg"></div>
            <div className="section-bg section-content-bg"></div>
            <div className="container">
                <header className="header">
                    <div className="header-box">
                        <div className="avatar wow inShow no-print">
                            <Cube/>
                        </div>
                        <h1 className="name text-center wow inShow no-print">{filter(baseInfo.nikeName)}</h1>
                        <h1 className="name text-center hide show-print-block">{filter(baseInfo.firstName) + filter(baseInfo.lastName)}</h1>
                    </div>
                </header>
                <div className="section-content">
                    <div className="content-box">
                        <div className="name-slogan">
                            <h2 className="wow inShow no-print" data-wow-delay="0.1s">
                                            <span
                                                className="text-light">{filter(baseInfo.firstName)}</span>&nbsp;
                                {filter(baseInfo.lastName)}
                            </h2>
                            <div className="description wow inShow"
                                 data-wow-delay="0.15s">{filter(baseInfo.nameFootNote)}
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="item wow inShow" data-wow-delay="0.3s">
                                        <h4>性别</h4>
                                        <div className="info">{filter(baseInfo.gender)}</div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="item wow inShow" data-wow-delay="0.45s">
                                        <h4>年龄</h4>
                                        <div className="info">{filter(baseInfo.age)}</div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="item wow inShow" data-wow-delay="0.5s">
                                        <h4>学历</h4>
                                        <div className="info">{filter(baseInfo.education)}</div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <a className="item wow inShow"
                                       data-wow-delay="0.55s" target="_blank">
                                        <h4>经验</h4>
                                        <div
                                            className="info">{filter(baseInfo.exp)}
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="item wow inShow" data-wow-delay="0.6s">
                                        <h4>Phone</h4>
                                        <address className="info">{filter(baseInfo.phone)}</address>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="item wow inShow" data-wow-delay="0.65s">
                                        <h4>QQ</h4>
                                        <div className="info">{filter(baseInfo.QQ)}</div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                        <h4>Email</h4>
                                        <div className="info">{filter(baseInfo.email)}</div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <a className="item wow inShow" data-wow-delay="0.75s" target="_blank"
                                       href={baseInfo.gitHub || '#'}>
                                        <h4>Github</h4>
                                        <div className="info">{filter(baseInfo.gitHub)}</div>
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