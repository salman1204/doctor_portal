import React from "react";
import { Row } from "react-bootstrap";
import InfoCard from "../InfoCard/InfoCard";
import { GrClock, GrLocation, GrPhone } from "react-icons/gr";
import "./BusinessInfo.css";

const infosData = [
  {
    title: "Opening Hours",
    description: "Lorem ipsum dolor sit amet",
    icon: GrClock,
    background: "primary",
  },

  {
    title: "Visit our location",
    description: "Brooklyn, NY 10036, United States",
    icon: GrLocation,
    background: "dark",
  },

  {
    title: "Contact us now",
    description: "+000 123 456789",
    icon: GrPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
      <div className="d-flex justify-content-center">
      <Row className="m-0 w-75">
        {infosData.map((info, index) => (  
          <InfoCard info={info} key={index}></InfoCard>
        ))}
      </Row>
      </div>
  );
};

export default BusinessInfo;
