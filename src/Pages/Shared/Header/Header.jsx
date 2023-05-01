import React, { useContext } from 'react';
import logo from '../../../assets/images/icons/logo.png'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { UserContext } from '../../../AuthProviders/AuthProvider';

const Header = () => {
    const {user, logOUt} = useContext(UserContext);
    const handleOut =()=>{
        logOUt();
    }
    return (
        <nav className=' bg-black bg-opacity-60 px-6 lg:px-10 2xl:px-14'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 w-full">
                            <li className='my-2'>
                                <FaSearch className='w-12 h-12 text-white absolute' />
                                <input type="text" className='py-3 px-8 bg-white bg-opacity-20 border border-white placeholder:font-medium placeholder:text-sm placeholder:text-white' placeholder={`Search your Destination...`} />
                            </li>
                            <li className='text-white'><Link to="/news">News</Link></li>
                            <li className='text-white'><Link to="/destination">Destination</Link></li>
                            <li className='text-white'><Link to="/blog">Blog</Link></li>
                            <li className='text-white'><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} alt="Logo" className='w-28' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <FaSearch className='w-12 h-12 text-white absolute' />
                            <input type="text" className='py-0 px-8 bg-white bg-opacity-20 border border-white placeholder:font-medium placeholder:text-sm placeholder:text-white' placeholder={`Search your Destination...`} />
                        </li>
                        <li className='text-white'>
                            <Link to="/news">
                                News
                            </Link>
                        </li>
                        <li className='text-white'><Link to="/destination">Destination</Link></li>
                        <li className='text-white'><Link to="/blog">Blog</Link></li>
                        <li className='text-white'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <Link className="myBtn" to="/login" onClick={handleOut}>Log out</Link>
                        : 
                        <Link className="myBtn" to="/login">Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;