import React, {Component} from 'react';
import './index.less';
import netWork from '../Services/index';
import MyBaseInfo from './../Component/MyBaseInfo/index';
import MyIntroduce from './../Component/MyIntroduce/index';
import MyExperience from './../Component/MyExperience/index';
import MySkills from './../Component/MySkills/index';
import MyProjectExp from './../Component/MyProjectExp/index';
import MyUsually from './../Component/MyUsually/index';
import MyContact from './../Component/MyContact/index';
import ViewOnGithub from './../Component/ViewOnGithub/index';

// import Loading from './../Loading/index'
class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        netWork.get(['resume']).then(res => {
            console.log(res);
        })
    }
    render() {
        return (
            <div className="Resume">
                <div className="main-container">
                    <ViewOnGithub/>
                    <MyBaseInfo/>
                    <MyIntroduce/>
                    <MyExperience/>
                    <MySkills/>
                    <MyProjectExp/>
                    <MyUsually/>
                    <MyContact/>
                </div>
            </div>
        );
    }
}

export default Resume;
