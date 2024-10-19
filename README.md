E-commerce Listing Page - React Assignment
This project is an E-commerce product listing page built using React, following the design specifications provided in the Figma Design. The page allows users to view a list of products, add items to a cart using a modal, and view a custom "Thank You" page when viewing a product.

Table of Contents
Project Overview
Features
Installation
Usage
Components
Technologies Used
Project Structure
Contributing

Project Overview

This is a front-end application built in React that simulates an e-commerce product listing page. It includes a functional UI with routing, modals, and pagination. Static/mock data is used to simulate products, and there is no backend or API integration.

Key Features:
Product listing page with mock data.
Pagination for navigating through product listings.
"View Product" button redirects to a custom "Thank You" page.
"Add to Cart" button opens a modal for adding items to the cart.
Search bar for filtering products.
Responsive design based on the Figma specifications.

Features
Header Section:

A search bar to search for products.
Icons for profile and cart with a product count.
Product List Section:

Displays a grid of products with product image, name, price, and action buttons ("View Product" and "Add to Cart").
Clicking "View Product" redirects the user to a custom "Thank You" page.
Clicking "Add to Cart" opens a modal with product details and a confirmation option.

Add to Cart Modal:

Shows product details and an option to confirm adding the item to the cart.

Pagination:

Pagination allows users to navigate through the list of products.

Thank You Page:

Custom "Thank You" page is shown after clicking "View Product" with a message confirming the user’s action.

Usage
Homepage: Displays the list of products with pagination.
Add to Cart: Click "Add to Cart" on any product to open a modal with the product details.
View Product: Click "View Product" to be redirected to a custom "Thank You" page.
Search: Use the search bar in the header to filter products.

Components
Header: Includes a search bar and icons for profile and cart.
ProductCard: Displays individual product details such as image, name, price, and buttons for viewing and adding to the cart.
AddToCartModal: Modal that opens when the user clicks "Add to Cart" and displays product details with a confirmation button.
Pagination: Component for navigating between different pages of the product list.
ThankYouPage: Custom page displayed when the user clicks "View Product."

Technologies Used
React: For building the user interface and handling state.
React Router: For navigation and routing between pages.
React Hooks: For managing component state.
CSS: For styling the application.
