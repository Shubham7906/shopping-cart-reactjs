# Shopping Cart

## Features
### -Product Listing
### -Filter Functionality
### -Shopping Cart
### -Checkout
### -Responsive Design

## Approach - 

## Tech Stack
- React.js
- Tailwind CSS
- Fakestore API
- React Router

## Project Setup

First I set up the project locally :
-Install project dependencies using npm
-Start the development server.

## Data Source

I used the Fakestore API to fetch product data. The API provides product listings, including details such as images, names, prices, descriptions, categories, and ratings.

## Routing

I have implemented routing in the project using React Router. Different sections of the website, such as the product listing page, shopping cart, and checkout, are defined as routes.

## Home Page and Products Page

The Home page and products page displays a wide variety of products. It provides product information, including images, names, prices, descriptions, categories, and "Add to Cart" buttons.

## Filters for Sorting

I implement filters that allow users to sort products based on various criteria:
- Price Range Filter: Users can filter products by specifying a price range (e.g., Rs 1 - Rs. 100).
- Product Category Filter: Users can filter products by category (e.g., men's clothing, women's clothing, jewelry, electronics).

## Shopping Cart

I implement a shopping cart section that allows users to manage added products. Users can:
    -Add products to the cart.
    -View and update quantities of products in the cart.
    -Remove products from the cart.
    -Real-time updates of the cart's total cost and item count are displayed.

## Checkout 

The checkout page is designed for users to enter shipping information and payment details. It includes form fields for:
    -Shipping Name
    -Card Number

## Responsive Design and UI

I used Tailwind CSS for designing and styling the website, ensuring that it is responsive and user-friendly on both desktop and mobile devices. The layout is optimized for different screen sizes.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
