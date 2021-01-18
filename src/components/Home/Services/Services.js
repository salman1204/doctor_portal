import React from "react";
import "./Services.css";
import ServiceDetails from '../ServiceDetails/ServiceDetails'
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import { Row } from "react-bootstrap";

const serviceData = [
  {
    name: "Fluoride Treatment",
    img: fluoride,
  },
  {
    name: "Fluoride Treatment",
    img: cavity,
  },
  {
    name: "Fluoride Treatment",
    img: whitening,
  },
];

const Services = () => {
  return (
    <section className="service__container mt-5">
      <div className="text-center mb-5">
        <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
      <Row className="m-0 w-75">
        {serviceData.map((service, index) => (  
          <ServiceDetails service={service} key={index}></ServiceDetails>
        ))}
      </Row>
      </div>
    </section>
  );
};

export default Services;
