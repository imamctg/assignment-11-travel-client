import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Vacation.css';

const Vacation = () => {
    return (
        <div className="container slide-image mt-5 ">
            <h1 >VACATION</h1>
            <hr className="hrline mb-3" />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/196pRt6/vacation1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Los Cabos</h3>
                        <p>Leave the cares of everyday life behind with the spectacular scenery, lazy days and vibrant nights of Los Cabos, Mexico.
                            For a limited time receive up to $200 instant savings on a Los Cabos vacation.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/Hg1NgyM/vacation2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Hawaii Vacations</h3>
                        <p>Say hello to a family vacation to Hawaii. Paradise awaits you with savings up to 35%, plus free extras like resort credits at select resorts and up to $300 promo code*.

                            Offer ends November 18, 2021.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/pwNfxFk/vacation3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>RIU Hotels & Resorts</h3>
                        <p>Make a splash at RIU Hotels & Resorts and enjoy Splash Water World in Mexico, Caribbean and Central America. Plus enjoy Exclusive Perks like free transfers* at select resorts.

                            For a limited time enjoy savings up to 55%, plus kids stay free and free transfers at select resorts.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Vacation;