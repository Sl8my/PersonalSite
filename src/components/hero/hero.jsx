import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hero-image-01.png';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">ciao,</h1>
            <h1 className="weight800 font60">
              I'm a full stack developer.
            </h1>
            <p className="font12">
              I am Domenico Serravalle,
              24 years old, <br></br>
              just finished an intensive programming course in Zurich,<br></br>
              just began the university part-time in computer science<br></br>
              and looking to contribute to a cool company. 
            </p>

            
            <Button label="CONTACT ME" target="contact"/> 

          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
