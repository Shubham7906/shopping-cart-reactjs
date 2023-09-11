import React from 'react'

function About() {
  return (
    <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-3/12">
                        <img
                            src="https://images.pexels.com/photos/6207729/pexels-photo-6207729.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Shopping Cart
                        </h2>
                        <p className="mt-6 text-gray-600">
                        The Shopping Cart is one of India's leading digital commerce entities. Shopping Cart technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.
                        </p>
                        <p className="mt-4 text-gray-600">
                        The future of e-commerce is sustainable, equitable and inclusive. As we continue to drive changes across key areas of our operations, our commitment is embedded in our vision to create a positive impact, for the planet and communities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About