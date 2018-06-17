import React from 'react';
import Start from '../Star/index'
let ViewOnGithub = (props) => {
    return (
        <div className="useful-link no-print">
            <a className="github-button" href="https://github.com/linghaozhang/resume" target="_blank"
               title="查看源码">
                <Start/>
                <span>Github</span>
            </a>
        </div>
    )
};
export default ViewOnGithub