import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                    src={require('../images/profile.jpeg')}
                    alt="avatar"
                    className="avatar-img"
                    />

                    <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>

                    <hr />

                    <p>HTML/CSS | JavaScript | React | NodeJS</p>
                    <div className="social-links">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/grantposell/" rel= "noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                    </a>
                    {/* Github */}
                    <a href="https://github.com/grantposell" rel= "noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square"  aria-hidden="true" />
                    </a>
                    {/* Stack Overflow */}
                    <a href="https://stackoverflow.com/users/6174079/grant-thomas-posell" rel= "noopener noreferrer" target="_blank">
                    <i className="fa fa-stack-overflow"  aria-hidden="true" />
                    </a>
                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;