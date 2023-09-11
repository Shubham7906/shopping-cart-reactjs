import React, { useEffect, useState } from 'react'
import Hero from '../../assets/Components/Hero/Hero'
import Products from '../../assets/Components/Products/Products'
import Feature from '../../assets/Feature/Feature'
import Footer from '../../assets/Components/Footer/Footer'
import Categories from '../../assets/Components/Categories/Categories'

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products?limit=16`)
            const data = await response.json()
            console.log(data, 'data')
            setProducts(data)
        }
        fetchProducts()

    },[])
    

  return (
    <>
        <Hero />
        
        <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-gray-800 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
        </div>
    {
        products.length > 0 ? 
        <Products products={products} /> 
        : 
        <div>Loading....</div>
    }
        
    </>
  )
}

export default Home;