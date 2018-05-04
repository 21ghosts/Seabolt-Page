import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './home.css'

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Seabolt Brokers: LLC</h2>
                    <p>Savannah Real Estate's Finest</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About Us</Button>
                    </Link>
                </Jumbotron>

                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="guy-wrapper">
                        <Image src="assets/guy5.jpg" circle className="profile-pic"/>
                        <h3>William Gibbens</h3>
                        <p>If I paint something, I don't want to have to explain what it is. 
                            These trees are so much fun. I get started on them and 
                            I have a hard time stopping. That's the way I look when I get home late; 
                            black and blue.</p>
                    </Col>
                    <Col xs={12} sm={4} className="guy-wrapper">
                        <Image src="assets/girl3.jpg" circle className="profile-pic" />
                        <h3>Bethany Ross</h3>
                        <p>There it is. A beautiful little sunset. A happy cloud. 
                            If you don't think every day is a good day - try missing a few. You'll see. 
                            Let's make a nice big leafy tree. With practice comes confidence.</p>

                    </Col>
                    <Col xs={12} sm={4} className="guy-wrapper">
                        <Image src="assets/guy6.jpg" circle className="profile-pic" />
                        <h3>Joseph Barns</h3>
                        <p>Making all those little fluffies that live in the clouds. 
                            Let your imagination be your guide. But they're very easily killed. 
                            Clouds are delicate. Get tough with it, get strong. 
                            We might as well make some Almighty mountains today as well, what the heck.</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;

