import React from 'react';
import Start from './../Start/index'
let ViewOnGithub = (props) => {
    return (
        <div className="useful-link no-print">
            <a className="github-button" href="https://github.com/linghaozhang/resume"
               title="查看源码">
                <Start/>
                <span>View on Github</span>
            </a>
        </div>
    )
};
export default ViewOnGithub