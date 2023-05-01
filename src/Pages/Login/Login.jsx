import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [type, setType] = useState('password');
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setType('text')
    }
    const handleHide = () => {
        setType('password')
    }
    return (
        <section className='my-14 px-10'>
            <div className='flex items-center justify-center my-16'>
                <div>
                    <h2 className='text-center my-8 font-bold text-4xl tracking-wide' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Login</h2>
                    <form className='flex flex-col'>
                        <label htmlFor="email" className='mb-2 font-medium text-gray-600'>Email:</label>
                        <input type="email" id="email" name="email" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-50  focus:border-0 py-2' />
                        <label htmlFor="password" className='mt-4 mb-2 font-medium text-gray-600'>Password:</label>
                        <span className='flex items-center '>
                            <input type={type}
                                id="password" name="password" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-50  focus:border-0 py-2 w-full' />
                            <span className='cursor-pointer right-8 relative' onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEye className='w-5 text-gradient-primary' onClick={handleHide} /> : <FaEyeSlash className='w-5 text-gradient-primary' onClick={handleShow} />
                                }
                            </span>
                        </span>

                        <button type="submit" className='myBtn mt-5'>Login</button>
                    </form>
                    <hr className='my-8 border border-yellow-100' />
                    <div className='flex flex-col'>
                        <p className='text-center font-medium'>Or login with:</p>
                        <div className='my-2'>
                            <span type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 cursor-pointer">
                                <FaGoogle className='mr-2' />
                                Sign in with Google
                            </span>

                            <span className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 cursor-pointer">
                                <FaFacebook className='mr-2' /> Sign in with Facebook
                            </span>



                        </div>
                        <span className='my-2 font-medium text-red-500 underline'>Forgot password?</span>
                        <p className='font-medium'>Don't have an account? <Link to="/register" className='text-secondary'>Create one</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;