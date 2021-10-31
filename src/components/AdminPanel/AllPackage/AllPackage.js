import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const AllPackage = () => {
    const { user } = useAuth()
    console.log(user);
    const [bookings, setBookings] = useState([]);
    console.log(bookings);



    useEffect(() => {
        fetch("https://frozen-crag-22043.herokuapp.com/bookings")
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, []);

    const handleDelete = id => {
        const url = `https://frozen-crag-22043.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
    }
    const handleUpdate = id => {
        console.log('kflajsl')
        const url = `https://frozen-crag-22043.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                }
            })

    }


    return (

        <div className="container all-packg">
            <h1>All Bookings {bookings?.length}</h1>
            <div className="row">
                <div className="col">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Booking Ref</th>
                                <th>Booking Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {bookings?.map((pd, index) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.email}</td>
                                    <td>{pd?._id}</td>
                                    <td>{pd?.date}</td>
                                    <button onClick={() => handleDelete(pd?._id)}>Delete</button>
                                    <button onClick={() => handleUpdate(pd?._id)}>Update</button>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </div>

    );
};

export default AllPackage;