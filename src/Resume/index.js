import React, {Component} from 'react';
import './index.less';
import netWork from '../Services/netWork';
import MyBaseInfo from './../Component/MyBaseInfo/index';
import MyIntroduce from './../Component/MyIntroduce/index';
import MyExperience from './../Component/MyExperience/index';
import MySkills from './../Component/MySkills/index';
import MyUsually from './../Component/MyUsually/index';
import MyContact from './../Component/MyContact/index';
import ResumeIntroduce from './../Component/ResumeIntroduce/index';
import ViewOnGithub from './../Component/ViewOnGithub/index';
import Loading from './../Component/Loading/index';
class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseInfo: {},
            introduce:{},
            experience:[],
            skill:[],
            usually:[],
            resumeIntroduce:{},
            loadingShow:true
        }
    }
    componentDidMount() {
        netWork.get(['resume']).then(res => {
            if(res.success){
                let {baseInfo,introduce,experience,skill,usually,resumeIntroduce}=res.data;
                this.setState({
                    baseInfo,
                    introduce,
                    experience,
                    skill,
                    usually,
                    resumeIntroduce,
                    loadingShow:false
                })
            }else{
                console.log('请求出错请稍后再试')
            }
        })
    }
    render() {
        let {baseInfo,introduce,experience,skill,usually,resumeIntroduce,loadingShow}=this.state;
        return (
            <div className="Resume">
                {loadingShow?<Loading/>:
                <div className="main-container">
                    <ViewOnGithub/>
                    <MyBaseInfo baseInfo={baseInfo}/>
                    <MyIntroduce introduce={introduce}/>
                    <MyExperience experience={experience}/>
                    <MySkills skill={skill}/>
                    <MyUsually usually={usually}/>
                    <ResumeIntroduce resumeIntroduce={resumeIntroduce}/>
                    <MyContact baseInfo={baseInfo}/>
                </div>}
            </div>
        );
    }
}

export default Resume;
