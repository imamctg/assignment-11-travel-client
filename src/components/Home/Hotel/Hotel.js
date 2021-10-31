import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hotel = (props) => {
    const { name, img, address, price, id } = props.hotel;
    return (
        <div className="col-md-4">
            <div className="container service">
                <Card className="mb-2 card shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '180px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Add: {address}</Card.Text>
                        <Card.Title className="text-danger">Price : $ {price}</Card.Title>
                        <Link to={`/servicedetail/${id}`}>
                            <Button variant="info">Book Hotel</Button>
                        </Link>
                    </Card.Body>
                </Card>


            </div>
        </div>
    );
};

export default Hotel;