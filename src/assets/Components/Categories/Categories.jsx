import React, { useEffect, useState } from 'react'
import Feature from '../../Feature/Feature'

const Categories = () => {
        const [categories, setCategories] = useState([])

useEffect(()=>{
    const fetchCategories = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/categories`)
        const data = await response.json()
        console.log(data)
        setCategories(data)
    }
    fetchCategories()

},[])


return (
<div>
<Feature cards={categories} />
</div>
)
}

export default Categories;