import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManagePackage = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    console.log(bookings);

    const matched = bookings.filter(booking => booking.email === user.email)
    console.log(matched);

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
                    alert('Are You Confirm to Delete?')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
    }

    return (
        <div>
            <h1>My Bookings {matched?.length}</h1>
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
                {matched?.map((pd, index) => (
                    <tbody key={pd?._id}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?._id}</td>
                            <td>{pd?.date}</td>
                            <button onClick={() => handleDelete(pd?._id)}>Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManagePackage;