import React from "react";
import { Col } from "react-bootstrap";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
  return (
    <Col md={4} className={`info__${info.background} info__container text-white`}>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <div>
          <info.icon className="info__icon mr-3" style={{ fontSize: "3rem"}} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </Col>
  );
};

export default InfoCard;
