import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div style={{backgroundColor:'#262626'}}>
            <div className="center">
                <h1 style={{textAlign:'center',color:'yellow'}}>Software Skills</h1>
                <div className="skillBox">
                    <p>HTML</p>
                    <p>97%</p>
                    <div className="skill">
                        <div className="skill_level" style={{width:'97%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>CSS</p>
                    <p>90%</p>
                    <div className="skill">
                        <div className="skill_level" style={{width:'90%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>Bootstrap</p>
                    <p>95%</p>
                    <div className="skill">
                        <div className="skill_level" style={{width:'95%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>JavaScript</p>
                    <p>90%</p>
                    <div className="skill">
                        <div className="skill_level" style={{width:'90%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>React JS</p>
                    <p>90%</p>
                    <div className="skill">
                        <div className="skill_level" style={{width:'90%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>Node JS</p>
                    <p>87%</p>
                    <div className="skill">
                        <div className="skill_level"style={{width:'87%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>Express js</p>
                    <p>90%</p>
                    <div className="skill">
                        <div className="skill_level" style={{width:'90%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>Mongo DB</p>
                    <p>95%</p>
                    <div className="skill">
                        <div className="skill_level"style={{width:'95%'}}></div>
                    </div>
                </div>
                <h1 style={{color:'yellow',textAlign:'center'}}>Tools</h1>
                <div className="skillBox">
                    <p>Visual studio code</p>
                    <p>100%</p>
                    <div className="skill">
                        <div className="skill_level"style={{width:'100%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>Firebase</p>
                    <p>95%</p>
                    <div className="skill">
                        <div className="skill_level"style={{width:'95%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>Heroku</p>
                    <p>100%</p>
                    <div className="skill">
                        <div className="skill_level"style={{width:'100%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>Netlify</p>
                    <p>90%</p>
                    <div className="skill">
                        <div className="skill_level"style={{width:'90%'}}></div>
                    </div>
                </div>
                <div className="skillBox">
                    <p>Chrome dev</p>
                    <p>100%</p>
                    <div className="skill">
                        <div className="skill_level"style={{width:'100%'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;