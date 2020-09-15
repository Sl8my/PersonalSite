import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import ContactInfoIcon1 from '../../../assets/contact/contact-info-icon1.svg';
import ContactInfoIcon2 from "../../../assets/contact/contact-info-icon2.svg";
import ContactInfoIcon3 from "../../../assets/contact/contact-info-icon3.svg";


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon1}
            textLine1="Via Cadepezzo 14, 6572 Quartino"
            textLine2="Nidelbadstrasse 100, 8803 Rüschlikon"
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon2}
            textLine1="+41 76 416 94 95"
            textLine2=""
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <a href="https://www.linkedin.com/in/domenicoserravalle/" target="_blank" rel="noopener noreferrer">
          <ContactInfoBox
            icon={ContactInfoIcon3}
            textLine1="linkedin.com/in/domenicoserravalle/"
            textLine2=""
          />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
