import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceDetails = ({service}) => {

    return (
        <Col md={4} className="text-center">
            <img className="mt-4 mb-3" style={{height: '50px'}} src={service.img} alt=""/>
            <h5>{service.name}</h5>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae minima ab ut culpa modi quam.</p>
        </Col>
    );
};

export default ServiceDetails;