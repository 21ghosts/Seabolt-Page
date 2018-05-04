import React, { Component } from 'react';
import {Grid, Col, Image} from 'react-bootstrap';
import './about.css';
class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/cover5.jpg" className="header-img"/>
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/girl1.jpeg" className="about-profile-pic" rounded/>
                        <h3>Betty Ross</h3>
                        <p>Everyone wants to enjoy the good parts - but you have to build the framework first. Now we don't want him to get lonely, so we'll give him a little friend. These trees are so much fun. I get started on them and I have a hard time stopping.</p>

                        <p>Let the paint work. I like to beat the brush. Let your heart be your guide. Learn when to stop. Steve wants reflections, so let's give him reflections. Maybe there's a happy little Evergreen that lives here.</p>

                        <p>The light is your friend. Preserve it. Just a happy little shadow that lives in there. Maybe there's a happy little waterfall happening over here.</p>

                    </Col>
                </Grid>
            </div>
        );
    }
}

export default About;
