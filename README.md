# Backend Microservices E-commerce Application

This repository hosts the backend services for a versatile e-commerce application, developed with Express, MongoDB, Mongoose, and Elasticsearch. It adopts a microservices architecture, where various components handle user authentication, shopping cart management, order processing, and product catalog organization. RabbitMQ facilitates seamless communication between these microservices. Elasticsearch plays a crucial role in optimizing the search functionality, ensuring rapid and accurate product retrieval. The microservices design allows for independent development and scaling of each module, enhancing adaptability and maintainability.

## Table of Contents

1. [Authentication Service](#authentication-service)
2. [Cart Service](#cart-service)
3. [Order Service](#order-service)
4. [Catalog Service](#catalog-service)
5. [Search Service](#search-service-optional)

## Authentication Service

### Features
- User registration
- Getting user by id
- User authentication using jwt

### Endpoints
- `/api/users/signup` - Register a new user
- `/api/users/login` - User login
- `/api/users/:userId` - gets single user info

## Cart Service

### Features
- Add products to the cart
- Remove items from the cart
- Adjust quantity of items in the cart

### Endpoints
- `/api/cart/add/:productId` - Add a product to the cart
- `/api/cart/remove/:productId` - Remove a product from the cart
- `/api/cart/quantity/:productId` - Adjust quantity of items in the cart

## Order Service

### Features
- Create an order from the user's cart
- Delete cart upon order completion
- Secure checkout process

### Endpoints
- `/api/checkout` - Create a new order, completes order and delete the cart

## Catalog Service

### Features
- Manage a catalog
- Organized retrieval of products
- Queries for paginated retrieval of products

### Endpoints
- `/api/catalog/products` - Get all products (can be paginated and filtered using query)
- `/api/catalog/categories` - POST Add product 

## Search Service

### Features
- Search products by title
- Add new products to the Elasticsearch indices

### Endpoints
- `/api/documents/search` - Search for products by title using query
- `/api/search/add` - Add a new product to the search indices

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/asif-sidd9768/pratechbrands
