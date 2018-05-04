import React, { Component } from 'react';
import {Grid, Row, Col, Image } from 'react-bootstrap';
import './news.css';


class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/house1.jpg" className="header-img"/>
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-area">
                            <p>The little tiny Tim easels will let you down. Isn't it great to do something you can't fail at? When you do it your way you can go anywhere you choose. In your imagination you can go anywhere you want. You better get your coat out, this is going to be a cold painting. Let your imagination be your guide.</p>

                            <p>Use what you see, don't plan it. Mix your color marbly don't mix it dead. When things happen - enjoy them. They're little gifts. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. The man who does the best job is the one who is happy at his job.</p>

                            <p>We'll do another happy little painting. It's a super day, so why not make a beautiful sky? At home you have unlimited time.</p>

                            <p>There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. Nice little fluffy clouds laying around in the sky being lazy. Trees cover up a multitude of sins. No worries. No cares. Just float and wait for the wind to blow you around. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue.</p>

                        </Col>
                        <Col xs={12} sm={4} className="side-area">
                            <Image src="assets/house2.jpeg" rounded/>
                            <p>Imagination is the key to painting. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Put it in, leave it alone.</p>
                        </Col>
                    </Row>    
                </Grid>
            </div>
        );
    }
}

export default News;
