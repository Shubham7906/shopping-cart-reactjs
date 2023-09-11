import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products( {products=[]}){
  const [data, setData] = useState(products);

  const filterItem = (cat) => {
    if (cat === 'category') {
      setData(products);
    } else {
      const updatedList = products.filter((item) => {
        return item.category === cat;
      });
      setData(updatedList);
    }
  };

  const sortItems = (cart) => {
    if(cart === 100){
      const updatedL = products.filter((item) =>{
        console.log(item.price)
        return item.price <= cart;
      })
      setData(updatedL)
    }
    else if(cart === 101){
      const updatedL = products.filter((item) =>{
        console.log(item.price)
        return item.price > cart;
      })
      setData(updatedL)
    }
    }

   /*const [data, setData] = useState(products);
  
    const filterItem = (cat) => {
      if (cat === 'category') {
        // If 'All' is clicked, reset to the original data
        setData(products);
      } else {
        // Filter the data based on the category
        const updatedList = products.filter((item) => {
          return item.category === cat;
        });
        setData(updatedList);
      }
    }; 
/*
  const [data, setData] = useState(products);
  console.log(data, 'filter')
  




  const filterItem = (cat) => {
    const updatedList = data.filter((item) =>{
      return item.category === cat;
    });
    setData(updatedList);
  }*/
 /* const sortItems = (sortType) => {
    let updatedList = [...data]; // Create a copy of the data
  
    if (sortType === 'lowToHigh') {
      updatedList.sort((a, b) => {
        // Remove the currency symbol and convert to a floating-point number
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return priceA - priceB;
      });
    } else if (sortType === 'highToLow') {
      updatedList.sort((a, b) => {
        // Remove the currency symbol and convert to a floating-point number
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return priceB - priceA;
      });
    }
  
    setData(updatedList);
  };*/
  


  return (<>
  <div className="buttons text-center py-5">
  <button
    className="btn btn-outline-dark btn-sm m-2 bg-black text-white p-2 hover:bg-gray-700"
    onClick={() => sortItems(100)}
  >
    Price Range (Rs. 1 - Rs. 100)
  </button>
  <button
    className="btn btn-outline-dark btn-sm m-2 bg-black text-white p-2 hover:bg-gray-700"
    onClick={() => sortItems(101)}
  >
    Price Range (Rs. 101 - Rs. 1000)
  </button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-black text-white p-2 hover:bg-gray-700" onClick={() => filterItem("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-black text-white p-2 hover:bg-gray-700" onClick={() => filterItem("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-black text-white p-2 hover:bg-gray-700" onClick={() => filterItem("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-black text-white p-2 hover:bg-gray-700" onClick={() => filterItem("electronics")}>Electronics</button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-black text-white p-2 hover:bg-gray-700" onClick={() => setData(products)}>All</button>
        </div>

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {
      data.map((product) => {
        console.log(product, 'product')
        const { id, title, price, description, category, image } = product;
        return(
          <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer mb-4">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
          <h2 className="text-gray-900  title-font text-lg  font-medium max-h-10">{title.split(' ').slice(0, 4).join(' ')}</h2>
          <div className=' mt-12 flex-col align-middle'>
          <p className="mb-2">${price}</p>
          <button className=" ml-auto text-white bg-black border-0 py-1 px-1 focus:outline-none hover:bg-white hover:text-black rounded" onClick={() => handleCart(product)}>Add to Cart</button>
          </div>
        </div>
      </Link>
        )
      })
    }
    </div>
  </div>
</section>
</>
  )
}

export default Products;