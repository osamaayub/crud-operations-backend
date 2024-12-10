# MERN Assessment: RESTful API with Express.js and MongoDB

## Introduction

This project is a RESTful API built using **Express.js** and **MongoDB**, implementing basic CRUD operations and user authentication with **JWT**. It allows users to manage tasks with authentication-protected endpoints.

---

## Features

- **Authentication**: User login with JWT-based authentication.
- **Task Management**: 
  - Create, Read, Update, and Delete tasks.
  - Support for both full and partial updates.
- **Error Handling**: Meaningful error messages and appropriate HTTP status codes.
- **Middleware**: Protect routes with JWT validation.
- **Environment-based configurations**.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

---

## Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud)
- **npm** or **yarn**

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/osamaayub/crud-operations-backend
   cd crud-operations-backend
<hr>
1. Install the Dependecies
``` bash 
  npm install
<hr>
2.setUp the Enviroment variables 
Create a .env file in the project root with the following values 
```bash 
   MONGO_URI=mongodb://localhost:27017/mern-assessment
   JWT_SECRET=your_secret_key
   PORT=8000
   JWT_SECRET_EXPIRES_IN

<hr>

3. start the Application

```bash 
npm run dev
``` 
<hr>
4. Authentication
POST /login
Description: Authenticate a user and return a JWT token.
Request Body:
json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
Response:
200 OK:
json
{
  "token": "your.jwt.token"
}
401 Unauthorized:
json
{
  "error": "Invalid email or password"
}
CRUD Operations for Tasks
GET /tasks
Description: Fetch all tasks.
Query Parameters:
?page (optional): Page number for pagination.
?limit (optional): Number of tasks per page.
Response:
200 OK:
json
[
  {
    "id": "task1",
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "createdAt": "2023-12-10T12:00:00Z"
  }
]
POST /tasks
Description: Create a new task. Requires authentication.
Request Header:
json

{
  "Authorization": "Bearer your.jwt.token"
}
Request Body:
json
{
  "title": "New Task",
  "description": "Task Details",
  "completed": false
}
Response:
201 Created:
json
{
  "id": "new-task-id",
  "title": "New Task",
  "description": "Task Details",
  "completed": false,
  "createdAt": "2023-12-10T12:00:00Z"
}
GET /tasks/:id
Description: Fetch a task by its ID. Requires authentication.
Request Header:
json
Copy code
{
  "Authorization": "Bearer your.jwt.token"
}
Response:
200 OK:
json
{
  "id": "task-id",
  "title": "Task Title",
  "description": "Task Description",
  "completed": false,
  "createdAt": "2023-12-10T12:00:00Z"
}
404 Not Found:
json
{
  "error": "Task not found"
}
PUT /tasks/:id
Description: Replace an entire task. Requires authentication.
Request Header:
json
{
  "Authorization": "Bearer your.jwt.token"
}
Request Body:
json
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": true
}
Response:
200 OK:
json
{
  "id": "task-id",
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": true,
  "createdAt": "2023-12-10T12:00:00Z"
}
PATCH /tasks/:id
Description: Update specific fields of a task. Requires authentication.
Request Header:
json
{
  "Authorization": "Bearer your.jwt.token"
}
Request Body (example):
json
{
  "completed": true
}
Response:
200 OK:
json
{
  "id": "task-id",
  "title": "Task Title",
  "description": "Task Description",
  "completed": true,
  "createdAt": "2023-12-10T12:00:00Z"
}
DELETE /tasks/:id
Description: Delete a task by its ID. Requires authentication.
Request Header:
json
{
  "Authorization": "Bearer your.jwt.token"
}
Response:
200 OK:
json
{
  "message": "Task deleted successfully"
}
404 Not Found:
json
{
  "error": "Task not found"
}
6.Error Handling
The API returns appropriate HTTP status codes and error messages for various scenarios:

400 Bad Request: Validation errors.
401 Unauthorized: Invalid or missing JWT.
404 Not Found: Non-existent resources.

7.Contributors
Osama 

