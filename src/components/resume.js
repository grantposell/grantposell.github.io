import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                        <img
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Grant Posell</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>2827 Dunvale Rd, Apt 6415,Houston, TX 77063 </p>
                        <h5>Phone</h5>
                        <p>(832) 530-8222</p>
                        <h5>Email</h5>
                        <p>grantposell@gmail.com</p>
                        <h5>Web</h5>
                        <p>grantposell.github.io</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education 
                        startMonth="January"
                        startYear={2013}
                        endMonth="December"
                        endYear={2016}
                        schoolName="Texas A&M University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <Education 
                        startMonth="January"
                        startYear={2013}
                        endMonth="December"
                        endYear={2016}
                        schoolName="Blinn College"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience 
                        startYear={2009}
                        endYear={2012}
                        jobName="First Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <Experience 
                        startYear={2009}
                        endYear={2012}
                        jobName="Second Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                        skill="javascript"
                        progress={100}
                        />
                        <Skills 
                        skill="html/css"
                        progress={80}
                        />
                        <Skills 
                        skill="nodejs"
                        progress={50}
                        />
                        <Skills 
                        skill="React"
                        progress={25}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;