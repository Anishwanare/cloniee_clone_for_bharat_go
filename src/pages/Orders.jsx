import React from 'react';
import Header from '../components/Header';
import { useCart } from '../context/AppContext';

const Orders = () => {
    const { checkOutItems = [] } = useCart();

    const totalPrice = checkOutItems?.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    const totalItems = checkOutItems?.reduce((count, item) => count + (item.quantity || 1), 0);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="max-w-3xl mx-auto text-black mt-5">
                <h2 className="text-2xl mb-6 text-center border-b">Your Orders</h2>

                {checkOutItems.length === 0 ? (
                    <p className="text-center text-lg">No orders placed yet.</p>
                ) : (
                    <div>
                        <div className="space-y-6">
                            {checkOutItems?.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-white text-black p-4 border-b"
                                >
                                    <img
                                        src={item?.images?.[0]}
                                        alt={item?.title}
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                    <div className="ml-4 flex-1">
                                        <h3 className="text-lg font-semibold">{item?.title}</h3>
                                        <p className="font-medium">Qty: <span className="">{item?.quantity || 1}</span></p>
                                        <p className="text-red-600 ">₹{item?.price}</p>
                                    </div>
                                    <span className="font-semibold text-sm bg-green-500 text-white px-3 py-1 rounded-full border border-white">Delivered</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-white text-black text-lg font-semibold flex justify-between border-b">
                            <span>Total Items: <span className="font-bold">{totalItems}</span></span>
                            <span>Total Price: <span className="text-red-600 font-bold">₹{totalPrice.toFixed(2)}</span></span>
                        </div>

                        <p className="text-sm text-center mt-10 text-gray-400 font-medium tracking-wide underline cursor-pointer  hover:text-gray-500">
                            Thank you for shopping with <span className="text-red-400 hover:text-red-500">CLON!ee</span>
                        </p>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
