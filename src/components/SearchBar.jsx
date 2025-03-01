import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchBar = ({ searchText, setSearchText }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showSearchData, setShowSearchData] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "https://api.escuelajs.co/api/v1/products"
                );
                if (response.status === 200) {
                    setProducts(response.data);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (searchText) {
            const filter = products.filter((product) =>
                product.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredProducts(filter);
        } else {
            setFilteredProducts(products);
        }
    }, [searchText, products]);

    return (
        <div className="flex flex-col md:flex-row justify-between items-cente p-6 max-w-6xl m-auto  border-b">
            <div className="text-sm md:text-xl font-semibold pb-10 sm:pb-0">
                Total Results:
                <span className="text-green-600">{filteredProducts.length}</span>
            </div>

            <div className="flex flex-row items-center ">
                <label className="text-sm md:text-xl">
                    Search Items:
                </label>
                <input
                    id="search"
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search your favorite items..."
                    className="w-60 md:w-80 px-4 py-2 text-sm md:text-lg rounded-xl relative border b focus:border-green-500"
                    onFocus={() => setShowSearchData(true)}
                    onBlur={() => setTimeout(() => setShowSearchData(false), 200)}
                />
                {searchText && (
                    <button
                        onClick={() => setSearchText("")}
                        className="bg-red-500 text-white px-4 py-2 text-sm md:text-base rounded-lg shadow hover:bg-red-600 transition"
                    >
                        Reset Filter
                    </button>
                )}
            </div>

            {showSearchData && (
                <div className=" mt-4 absolute z-40 right-0 top-48 sm:top-32">
                    {filteredProducts.length > 0 ? (
                        <ul className="max-h-60 overflow-y-auto border rounded-lg p-3 shadow-md bg-gray-50">
                            {filteredProducts.map((product) => (
                                <li
                                    key={product.id}
                                    className="p-2 text-sm sm:text-base border-b hover:bg-green-50 cursor-pointer"
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        setSearchText(product.title.toLowerCase());
                                    }}
                                >
                                    {product.title}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center">No items found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
