import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { useCart } from '../context/AppContext';

const Header = ({ setCategory }) => {
    const { cartItem, setModel } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()


    useEffect(() => {
        const credential = localStorage.getItem('login')
        if (!credential) {
            navigate("/login")
        }
    }, [navigate])

    return (
        <div className='flex justify-between items-center shadow-md p-5 w-full bg-white sticky top-0 z-50'>
            <div className='flex items-center gap-4'>
                <Link to={'/'} className='text-xl font-bold px-3'>CLON!ee</Link>
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-4' onClick={(e) => setCategory(e.target.textContent)}>
                        {['All', 'Electronics', 'Furniture', 'Toys', 'Shoes'].map((item) => (
                            <li key={item} className='cursor-pointer hover:underline hover:text-green-500'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <ul className='hidden md:flex items-center gap-4 relative'>
                    <li className='text-gray-400'>anishwanare@gmail.com</li>
                    <Link to={'/my-orders'}>
                        <li className='cursor-pointer'>My Orders</li>
                    </Link>
                    <li className='cursor-pointer text-2xl relative' onClick={() => setModel(true)}>
                        <MdOutlineShoppingCart />
                        {cartItem?.length > 0 && (
                            <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                                {cartItem.length}
                            </div>
                        )}
                    </li>
                    <li className=' bg-red-500 mx-6 text-center p-2 rounded-lg text-base font-bold text-white' onClick={() => {
                        localStorage.removeItem("login")
                        navigate('/login')
                    }}><button>Logout</button></li>
                </ul>

                <button className='md:hidden text-2xl' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>

            {isMenuOpen && (
                <div className='absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 h-screen'>
                    <ul className='flex flex-col gap-4 text-lg' onClick={(e) => {
                        setCategory(e.target.textContent);
                        setIsMenuOpen(false);
                    }}>
                        {['All', 'Electronics', 'Furniture', 'Toys', 'Shoes'].map((item) => (
                            <li key={item} className='cursor-pointer hover:underline hover:text-green-500'>{item}</li>
                        ))}
                    </ul>
                    <div className='mt-6 flex flex-col gap-4 items-center w-full'>
                        <p className='text-gray-500 text-sm'>anishwanare@gmail.com</p>
                        <Link to={'/my-orders'} className='text-lg cursor-pointer hover:underline'>My Orders</Link>
                        <div className='relative cursor-pointer text-2xl' onClick={() => setModel(true)}>
                            <MdOutlineShoppingCart />
                            {cartItem?.length > 0 && (
                                <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                                    {cartItem.length}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Header;