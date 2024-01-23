# Backend Microservices E-commerce Application

This repository contains the backend services for an e-commerce application built with Express, MongoDB, and Mongoose.

## Table of Contents

1. [Authentication Service](#authentication-service)
2. [Cart Service](#cart-service)
3. [Order Service](#order-service)
4. [Catalog Service](#catalog-service)
5. [Search Service (Optional)](#search-service-optional)

## Authentication Service

### Features
- Guest user and registered user authentication
- User registration

### Endpoints
- `/api/auth/register` - Register a new user
- `/api/auth/login` - User login

## Cart Service

### Features
- Add products to the cart
- Create and manage user carts
- Remove items from the cart
- Adjust quantity of items in the cart

### Endpoints
- `/api/cart/add` - Add a product to the cart
- `/api/cart/remove` - Remove a product from the cart
- `/api/cart/quantity` - Adjust quantity of items in the cart

## Order Service

### Features
- Create an order from the user's cart
- Delete cart upon order completion
- Secure checkout process

### Endpoints
- `/api/order/create` - Create a new order
- `/api/order/complete` - Complete the order and delete the cart

## Catalog Service

### Features
- Manage a catalog of 100 products
- Organize products into 5 categories with brands

### Endpoints
- `/api/catalog/products` - Get all products
- `/api/catalog/categories` - Get all categories
- `/api/catalog/brands` - Get all brands

## Search Service (Optional)

### Features
- Index products in Elasticsearch for search functionality
- Search products by title
- Add new products to the Elasticsearch indices

### Endpoints
- `/api/search` - Search for products by title
- `/api/search/add` - Add a new product to the search indices

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
