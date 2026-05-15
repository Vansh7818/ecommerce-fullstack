# API Documentation

## Authentication

### Register User
`POST /api/auth/register`
- Body: `{ name, email, password }`
- Response: `201 Created` with user data and JWT token.

### Login User
`POST /api/auth/login`
- Body: `{ email, password }`
- Response: `200 OK` with user data and JWT token.

### Get Profile
`GET /api/auth/profile`
- Headers: `Authorization: Bearer <token>`
- Response: `200 OK` with user profile.

## Products

### Get All Products
`GET /api/products`
- Query Params:
    - `search`: String
    - `category`: String
    - `minPrice`: Number
    - `maxPrice`: Number
    - `sort`: `price-low`, `price-high`, `rating`
    - `page`: Number (default 1)
    - `limit`: Number (default 12)
- Response: `200 OK` with products data and pagination info.

## Admin

### Get Dashboard Stats
`GET /api/admin/stats`
- Headers: `Authorization: Bearer <token>` (Admin Only)
- Response: `200 OK` with dashboard statistics.

### Get All Users
`GET /api/admin/users`
- Headers: `Authorization: Bearer <token>` (Admin Only)
- Response: `200 OK` with list of users.
