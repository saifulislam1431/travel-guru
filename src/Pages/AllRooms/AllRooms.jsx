import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllRooms = () => {
    const allRooms = useLoaderData();
    console.log(allRooms);
    return (
        <div>
            
        </div>
    );
};

export default AllRooms;