import React, { useEffect, useState } from 'react'
import Products from '../../assets/Components/Products/Products';
import Categories from '../../assets/Components/Categories/Categories';

const ProductSec = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json()
            console.log(data, 'data')
            setProducts(data)
        }
        fetchProducts()

    },[])

  return (
    <div>
    <Categories />
    <div className="flex flex-col text-center w-full mt-5">
        <h2 className="text-xs text-black tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
        </div>
        {
        products.length > 0 ?
        <Products products={products}/>
        :
        <div></div>
      }
    </div>
  )
}

export default ProductSec