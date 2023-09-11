import React from 'react'
import { Link } from 'react-router-dom';

const Feature = ({cards = [1]}) => {
  return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-[50px] mx-auto">
    <div className="flex flex-wrap -m-4">
    <div className="flex flex-col text-center w-full mb-10">
      <h2 className=" text-black tracking-widest font-medium text-xl title-font mb">Categories</h2>
    </div>
    {
      cards?.map((card) => {
        return(
          <Link to={`/categories/${card}`} className="p-3 md:w-1/3 cursor-pointer">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium uppercase">{card || 'Example'}</h2>
          </div>
          <div className="flex-grow">
          </div>
        </div>
      </Link>
        )
      })
    }
    </div>
</div>
</section>
  )
}

export default Feature;