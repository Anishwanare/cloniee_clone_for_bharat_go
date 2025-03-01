import React, { useEffect } from "react";
import { useCart } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItem, addToCart, removeFromCart, clearCart, model, setModel, checkOut } = useCart();
    const navigate = useNavigate()

    const groupedItems = cartItem && cartItem.length > 0 && cartItem?.reduce((acc, item) => {
        const existingItem = acc.find((i) => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ ...item, quantity: 1 });
        }
        return acc;
    }, []);

    const totalPrice = groupedItems && groupedItems.length > 0 && groupedItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        if (model) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = "auto"
        }

    }, [model])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-2xl relative">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                    onClick={() => setModel(false)}
                    title="close"
                >
                    x
                </button>

                <h2 className="text-2xl mb-5 text-center text-gray-800">Your Items</h2>

                {groupedItems.length === 0 ? (
                    <p className="text-xl text-center">Your cart is empty.</p>
                ) : (
                    <div className="space-y-4 max-h-[70vh] overflow-y-auto px-2">
                        {groupedItems.length > 0 && groupedItems.map((item, index) => (
                            <div key={index} className="flex items-center border-b  p-4 rounded-lg">
                                <img
                                    src={item?.images[0]}
                                    alt={item?.title}
                                    className="w-20 h-20 object-cover rounded-md hover:scale-105 ease-in-out cursor-pointer hover:duration-700"
                                />
                                <div className="ml-4 flex-1">
                                    <h3 className="text-lg font-semibold">{item?.title}</h3>
                                    <p className="text-red-600">₹{item?.price}</p>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => removeFromCart(item)}
                                        className=" text-black px-3 py-1 rounded-md shadow-md hover:bg-gray-200 transition"
                                        disabled={item.quantity === 0}
                                    >
                                        -
                                    </button>
                                    <span className="text-lg font-bold">{item.quantity}</span>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className=" text-black px-3 py-1 rounded-md shadow-md hover:bg-gray-200 transition"
                                        disabled={item.quantity === 5}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {groupedItems.length > 0 && (
                    <div className="mt-5">
                        <div className="p-4  text-lg font-semibold text-end border-b">
                            Total Price: <span className="text-green-700">₹{totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mt-4 border-b pb-5">
                            <button
                                className=" text-black  hover:underline "
                                onClick={() => clearCart()}
                            >
                                Clear Cart
                            </button>
                            <button className=" text-black hover:underline " onClick={() => {
                                checkOut(prev => [...prev, ...groupedItems]);
                                clearCart()
                                navigate("/my-orders")

                            }}>
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Cart;
