import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LocatedRoom from '../LocatedRoom/LocatedRoom';

const FindRooms = () => {
    const rooms = useLoaderData();
    
    return (
        <section className='px-6 lg:px-10 2xl:px-14 my-3'>
             <hr className='border border-gray-600' />
             <h4 className='font-bold text-2xl my-5'>Stay in <span>{rooms ? rooms[0].place : ""}</span></h4>
            <div>
            {
                rooms.map(room=><LocatedRoom
                key={room.id}
                room = {room}
                ></LocatedRoom>)
            }
            </div>
        </section>
    );
};

export default FindRooms;