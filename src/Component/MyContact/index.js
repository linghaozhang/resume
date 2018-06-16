import React from 'react';

let MyContact=(props)=>{
    return(
        <div className="section no-print">
            <div className="container">
                <div className="section-bg section-header-bg"></div>
                <div className="section-bg section-content-bg"></div>
                <header className="header">
                    <div className="content-box">
                        <h2 className="title">联系&nbsp;/&nbsp;
                            <small><i>Contact</i></small>
                        </h2>
                        <div className="description">通过这些信息可以联系到我</div>
                    </div>
                </header>
                <div className="section-content">
                    <div className="contact">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="item">
                                    <h4>Phone</h4>
                                    <div className="info">userInfo.phone</div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="item">
                                    <h4>QQ</h4>
                                    <div className="info">userInfo.qq.number</div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="item">
                                    <h4>Location</h4>
                                    <div className="info">userInfo.location</div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <a className="item">
                                    <h4>Email</h4>
                                    <div className="info">userInfo.email</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="name-slogan">
                        <h2 className="wow inShow">
                            <span className="text-light">userInfo.lastName</span>&nbsp;userInfo.firstName
                        </h2>
                        <div className="description wow inShow" data-wow-delay="0.05s">userInfo.slogan</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MyContact