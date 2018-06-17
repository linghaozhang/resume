import React from 'react';

let MyUsually=({usually})=>{
    return(
        <div className="section">
            <div className="container">
                <div className="section-bg section-header-bg"></div>
                <div className="section-bg section-content-bg"></div>
                <header className="header">
                    <div className="content-box">
                        <h2 className="title">常逛&nbsp;/&nbsp;
                            <small><i>Usually</i></small>
                        </h2>
                        <div className="description">经常逛的技术或者设计相关网站</div>
                    </div>
                </header>
                <div className="section-content">
                    <div className="row usually">
                        {usually.map((i,n)=>(
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <i className="fa fa-github"></i>
                                    <h3 className="text-light">{i.name}</h3>
                                    <p>{i.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MyUsually