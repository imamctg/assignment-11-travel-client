import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props.packge)
    const { name, description, price, img, id } = props.packge;
    return (
        <div className="col-md-4">
            <div className="container service">
                <Card className="mb-2 card shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '180px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>Price : $ {price}</Card.Title>
                        <Card.Text>Description: {description}</Card.Text>
                        <Link to={`/servicedetail/${id}`}>
                            <Button variant="info">Book Package</Button>
                        </Link>
                    </Card.Body>
                </Card>


            </div>
        </div>
    );
};

export default Service;