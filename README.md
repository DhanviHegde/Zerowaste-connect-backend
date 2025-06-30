# ♻️ ZeroWaste Connect – Backend
Backend API for ZeroWaste Connect – a social impact platform that connects food donors with NGOs to reduce food waste. Built with Node.js, Express.js, and MongoDB using modular architecture, JWT authentication, bcrypt password hashing and role-based access control.

It is a social impact platform designed to reduce food waste by enabling real-time connections between food donors and NGOs.

This repository contains the **backend RESTful API**, built with:

- **Node.js** and **Express.js**
- **MongoDB** (with Mongoose)
- **JWT Authentication**
- **Bcrypt password hashing**
- **Role-Based Access Control**
- **Modular architecture** (controllers, routes, middleware, models)

---

## Features

-  Donor and NGO registration & login
-  JWT-based authentication
-  Role-based authorization (donor / NGO)
-  CRUD operations for food listings
-  Resource ownership checks

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JWT + Bcrypt**
- **dotenv**

---

##  API Routes

| Method | Endpoint                   | Access           | Description                           |
|--------|----------------------------|------------------|---------------------------------------|
| POST   | `/api/auth/register`       | Public           | Register as Donor or NGO              |
| POST   | `/api/auth/login`          | Public           | Login and receive JWT token           |
| GET    | `/api/listings`            | Authenticated    | Get all available listings            |
| POST   | `/api/listings`            | Donor only       | Create a new food listing             |
| PATCH  | `/api/listings/:id`        | Listing Owner    | **Update a listing** (title, details) |
| POST   | `/api/listings/:id/claim`  | NGO only         | **Claim a listing**                   |
| DELETE | `/api/listings/:id`        | Listing Owner    | Delete a listing                      |

---

 

## Author

**Dhanvi Hegde**  

