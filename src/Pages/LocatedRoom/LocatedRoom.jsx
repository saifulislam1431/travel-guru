import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HiOutlineStar } from "react-icons/hi";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';



const LocatedRoom = ({ room }) => {
  

    const { baths, beds, bedroom, category, description, facilities, features, id, imgUrl, place, price, rating, resort_name, review_numbers } = room;
    console.log(resort_name);
    return (
        <section>
            <div>

                <div className='my-8'>

                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={imgUrl} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{resort_name}</h2>
                            <div className='flex'>
                                <p>{bedroom} bedroom</p>
                                <p>{baths} baths</p>
                                <p>{beds.length} bed</p>
                            </div>
                            <div>
                                <div>
                                    <p className='font-semibold underline text-lg mb-2'>Features</p>

                                    <div className='font-medium'>
                                        {features.map(feature => <p>{feature}</p>)}
                                    </div>
                                </div>
                                <p className='mt-3'>Cancellation fexibility availiable</p>

                            </div>

                            <div className='flex lg:flex-col'>
                                <div className='flex items-center mt-3'>
                                    <Rating
                                        readonly
                                        placeholderRating={rating}
                                        emptySymbol={<HiOutlineStar />}
                                        placeholderSymbol={<FaStar className='text-yellow-600' />}
                                        fullSymbol={<FaStar />}
                                    />
                                    <p className='ml-0 pl-0 gap-0'>({review_numbers})</p>
                                </div>

                                <div className='border border-secondary p-2 mt-3 rounded-lg'>
                                    <p>${price}/night</p>
                                </div>
                            </div>
                            <Link className="card-actions justify-center mt-4">
                                <button className=" myBtn w-full">See Details</button>
                            </Link>
                        </div>
                    </div>

                   
                </div>
            </div>
        </section>
    );
};

export default LocatedRoom;