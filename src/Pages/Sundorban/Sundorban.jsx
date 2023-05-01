import React from 'react';
import {
    RangeDatePicker,
    SingleDatePicker
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import { Link } from 'react-router-dom';

const Sundorban = () => {
    return (
        <section>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1549300461-11c5b94e8855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold tracking-widest text-white" style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Sundarban</h1>
                    <p className="mb-5 text-white">The Sundarbans provides sustainable livelihoods for millions of people in the vicinity of the site and acts as a shelter belt to protect the people from storms, cyclones, tidal surges, sea water seepage and intrusion.</p>
                </div>
                <div>
                    <div className="card rounded-md w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-gray-600">Origin</span>
                                </label>
                                <input type="text" placeholder="Stating Location" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-gray-600">Destination</span>
                                </label>
                                <input type="text" placeholder="Ended Location" className="input input-bordered" />

                            </div>
                            <div className='overflow-hidden'>
                                <RangeDatePicker
                                    startDate={new Date(2020, 0, 1)}
                                    endDate={new Date(2020, 1, 1)}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <Link to="/">
                                <button className="btn myBtn w-full">Start Booking</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Sundorban;