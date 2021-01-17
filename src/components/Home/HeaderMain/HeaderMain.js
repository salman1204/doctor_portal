import React from "react";
import { Col, Row, Button, Image } from "react-bootstrap";
import "./HeaderMain.css";
import chair from "../../../images/chair.png";


const HeaderMain = () => {
  return (
    <Row style={{ height: "700px" }} className="d-flex align-items-center m-0">
      <Col md={4} className="offset-md-1">
        <h1 style={{ color : "#3A4256"}}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          blanditiis provident debitis. Eveniet, corrupti nostrum!
        </p>
        <Button variant="primary">GET APPOINTMENT</Button>
      </Col>
      <Col md={6}>
        <Image src={chair} alt="chairHome" fluid />
      </Col>
    </Row>
   
  );
};

export default HeaderMain;
