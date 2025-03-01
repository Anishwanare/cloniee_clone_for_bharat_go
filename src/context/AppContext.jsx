import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([])
    const [checkOutItems, setCheckOutItems] = useState([])
    const [model, setModel] = useState(false)
    const [descModel, setDescModel] = useState(false)

    const addToCart = (product) => {
        setCartItem(prev => [...prev, product])
    }

    const clearCart = () => {
        setCartItem([])
        setModel(false)
    }

    const checkOut = (products) => {
        setCheckOutItems(products);
    }

    const removeFromCart = (product) => {
        setCartItem((prevCart) => {
            const index = prevCart.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                const updatedCart = [...prevCart];
                updatedCart.splice(index, 1);
                return updatedCart;
            }
            return prevCart;
        });
    };

    return (
        <CartContext.Provider value={{ addToCart, cartItem, removeFromCart, clearCart, model, setModel, checkOut, checkOutItems, setDescModel, descModel }}>
            {children}
        </CartContext.Provider>
    )

}