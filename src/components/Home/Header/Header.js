
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, handleLogout } = useAuth();
    console.log(user)

    return (

        <Navbar className="header" collapseOnSelect expand="lg" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home"> <img
                    src="https://i.ibb.co/CP9QLG4/logo-1.png"
                    width="100"
                    height="80"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Navbar.Brand className="fw-bolder brand" href="#home"><span style={{ color: 'blue' }}>Adventure</span> Travel</Navbar.Brand>
                <Nav className="menu" expand="lg">
                    <Link to="/home">Home</Link>

                    {
                        user.displayName ?
                            <div>
                                <Link to="/manageBooking">My Bookings</Link>
                                <Link to="/allPackage">Manage All Booking</Link>
                                <Link to="/addPackage">Add A New Package</Link>
                            </div> :
                            <div>
                                <Link to="/services">Packages</Link>
                                <Link to="/hotels">Hotels</Link>
                            </div>


                    }



                    {user.displayName ?
                        <span className="user-name">{user.displayName}</span> :
                        <span className="user-name">{user.email}</span>
                    }


                    {user.email ?
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                        :
                        <Link to='/login'><button className="btn btn-success ms-1"> Login</button> </Link>
                    }
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;