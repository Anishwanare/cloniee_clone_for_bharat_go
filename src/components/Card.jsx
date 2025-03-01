import React, { useState } from "react";
import { useCart } from "../context/AppContext";

const Card = ({ products }) => {
    const { addToCart, cartItem, setModel, setDescModel, descModel, removeFromCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const selectProduct = (product) => {
        setSelectedProduct(product);
        setDescModel(true);
    };

    return (
        <div className="relative max-w-xs bg-white border border-gray-300 rounded-lg overflow-hidden p-4 shadow-md hover:shadow-lg transition-all duration-200">

            <div className="relative cursor-pointer" onClick={() => selectProduct(products)}>
                <img
                    src={products?.images[0]}
                    alt={products?.title}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-200 hover:scale-105"
                    loading="lazy"
                />
                <p className="absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded">
                    {products?.category?.slug.toUpperCase()}
                </p>
            </div>


            <div className="mt-3 text-left">
                <h2 className="text-lg font-semibold text-gray-900 truncate">{products?.title}</h2>
                <p className="text-xl font-bold text-red-600 mt-1">₹{products?.price}</p>
            </div>


            <div className="flex items-center justify-between mt-4">
                {cartItem.some((item) => item.title === products.title) ? (
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-3 py-2 rounded-lg w-full transition-all duration-200"
                        onClick={() => {
                            setModel(true);
                        }}
                    >
                        Go to Cart
                    </button>
                ) : (
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-2 rounded-lg w-full transition-all duration-200"
                        onClick={() => addToCart(products)}
                    >
                        Add to Cart
                    </button>
                )}
            </div>

            {descModel && selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4 relative">

                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition-all text-lg"
                            onClick={() => setDescModel(false)}
                        >
                            x
                        </button>

                        <img
                            src={selectedProduct?.images?.[0]}
                            alt={selectedProduct?.title}
                            className="w-full h-40 sm:h-64 object-contain rounded-lg"
                            loading="lazy"
                        />

                        <h2 className="text-xl font-semibold mt-4">{selectedProduct?.title}</h2>
                        <h2 className="text-lg font-semibold mt-2 text-gray-700">Price: ₹{selectedProduct?.price}</h2>
                        <p className="text-gray-600 text-sm mt-2">{selectedProduct?.description}</p>

                        <div className="flex items-center justify-center space-x-3 mt-4">
                            <button
                                onClick={() => removeFromCart(selectedProduct)}
                                className="bg-gray-200 text-black px-3 py-1 rounded-md shadow-md hover:bg-gray-300 transition"
                            >
                                -
                            </button>
                            <span className="text-lg font-bold">
                                {cartItem.find((item) => item.title === selectedProduct.title)?.quantity || 0}
                            </span>
                            <button
                                onClick={() => addToCart(selectedProduct)}
                                className="bg-gray-200 text-black px-3 py-1 rounded-md shadow-md hover:bg-gray-300 transition"
                            >
                                +
                            </button>
                        </div>

                        <div className="mt-6">
                            {cartItem.some((item) => item.title === selectedProduct.title) ? (
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-lg w-full transition-all duration-200"
                                    onClick={() => {
                                        setDescModel(false)
                                        setModel(true);
                                        setSelectedProduct(null)
                                    }}
                                >
                                    Go to Cart
                                </button>
                            ) : (
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg w-full transition-all duration-200"
                                    onClick={() => addToCart(selectedProduct)}
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
