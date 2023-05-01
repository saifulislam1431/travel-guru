import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [type, setType] = useState('password');
    const [show, setShow] = useState(false);
    const[error, setError] = useState("")
    const handleShow = () => {
        setType('text')
    }
    const handleHide = () => {
        setType('password')
    }
    return (
        <section>
            <div className='flex items-center justify-center my-16'>
            <div>
                <h2 className='text-center my-8 font-bold text-4xl tracking-wide' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Register Now!</h2>
                <form className='flex flex-col'>
                    <label htmlFor="email" className='mb-2 font-medium text-gray-600'>Email:</label>
                    <input type="email" id="email" name="email" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0 py-2' required />

                    <label htmlFor="userName" className='mt-4 mb-2 font-medium text-gray-600'>User Name:</label>
                    <input type="text" id="userName" name="userName" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0 py-2' required />

                    <label htmlFor="photoUrl" className='mt-4 mb-2 font-medium text-gray-600'>Photo URL:</label>
                    <input type="url" id="photoUrl" name="photoUrl" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0 py-2' />

                    <label htmlFor="password" className='mt-4 mb-2 font-medium text-gray-600'>Password:</label>
                    <span className='flex items-center '>
                        <input type={type}
                            id="password" name="password" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0 w-full py-2' required />
                        <span className='cursor-pointer right-8 relative' onClick={() => setShow(!show)}>
                            {
                                show ? <FaEye className='w-5 text-gradient-primary' onClick={handleHide} /> : <FaEyeSlash className='w-5 text-gradient-primary' onClick={handleShow} />
                            }
                        </span>
                    </span>

                    <label htmlFor="confirmPassword" className='mt-4 mb-2 font-medium text-gray-600'>Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0 py-2' required />
                    <p className='font-medium text-red-600 mt-2'>{error}</p>
                    <button type="submit" className='myBtn mt-5'>Register</button>
                </form>
                <hr className='my-5' />
                <div className='flex flex-col'>
                    <p className='font-medium'>Already have an account? <Link to="/login" className='text-secondary'>Login</Link></p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Register;