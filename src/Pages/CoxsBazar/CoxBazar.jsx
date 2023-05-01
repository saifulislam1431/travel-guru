import React from 'react';
import {
    RangeDatePicker,
    SingleDatePicker
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import { Link } from 'react-router-dom';

const CoxBazar = () => {
    return (
        <section>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1619177383949-f03975e50b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold tracking-widest text-white" style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Cox's bazar</h1>
                        <p className="mb-5 text-white">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
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
                                    <Link to="/findRooms/coxsBazar">
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

export default CoxBazar;