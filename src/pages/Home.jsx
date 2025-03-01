import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import SkeletonCard from '../components/SkeletonCard'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import Cart from '../components/Cart'
import { useCart } from '../context/AppContext'

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState("");
    let [category, setCategory] = useState('All')

    const { model } = useCart()

    if (category === "Toys") {
        category = 'miscellaneous'
    }

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products')
            if (!response) {
                throw new Error("Error while fetching products")
            }
            if (response.status) {
                setProducts(response.data)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const filterProducts = products.filter((product) => {
        const searchData = product.title.toLowerCase().includes(searchText.toLowerCase());
        const categoryData = category === "All" || product.category?.slug.toLowerCase() === category.toLowerCase()

        return searchData && categoryData
    })

    const productsLength = filterProducts?.length || 0;

    useEffect(() => {
        fetchProducts()
    }, [])

    if (loading) {
        return (
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl m-auto p-5'>
                {Array.from({ length: 12 }).map((d, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        )
    }

    return (
        <div>
            <Header setCategory={setCategory} />
            <SearchBar searchText={searchText} setSearchText={setSearchText} size={productsLength} />
            {model && <Cart />}

            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl m-auto gap-5 p-5'>
                {
                    filterProducts.length > 0 ? (
                        filterProducts.map((p) => (
                            <div key={p.id}>
                                <Card products={p} key={p.id} />
                            </div>
                        ))
                    ) : <div className="flex flex-col items-center justify-center w-full col-span-full text-center p-10">

                        <p className="text-2xl font-semibold text-red-500">
                            No products found with "<span className="font-bold">{searchText || category}</span>"
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Home
