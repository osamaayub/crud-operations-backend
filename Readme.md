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
<br>
  npm install
<hr>

2. setUp the Enviroment variables
Create a .env file in the project root with the following values

   MONGO_URI=mongodb://localhost:27017/mern-assessment
   <br>
   JWT_SECRET=your_secret_key
   <br>
   PORT=8000
   <br>
   JWT_SECRET_EXPIRES_IN



<hr>
3. start the Application

```bash 
npm run dev
``` 
<hr>
4. Authentication
POST /login
<br>
Description: Authenticate a user and return a JWT token.

Request Body:
<br>
json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
<br>
Response:
200 OK:
json
{
  "token": "your.jwt.token"
}
<br>
401 Unauthorized:
json
{
  "error": "Invalid email or password"
}
<br>
CRUD Operations for Tasks
<br>
GET /tasks
Description: Fetch all tasks.
Query Parameters:
<br>
?page (optional): Page number for pagination.
?limit (optional): Number of tasks per page.
<br>
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
<br>
POST /tasks
<br>
Description: Create a new task. Requires authentication.
<br>
Request Header:
<br>
json

{
  "Authorization": "Bearer your.jwt.token"
}
<br>
Request Body:
<br>
json
{
  "title": "New Task",
  "description": "Task Details",
  "completed": false
}
<br>
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
<br>
GET /tasks/:id
<br>
Description: Fetch a task by its ID. Requires authentication.
<br>
Request Header:
<br>
json
{
  "Authorization": "Bearer your.jwt.token"
}
<br>
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
<br>
404 Not Found:
json
{
  "error": "Task not found"
}
<br>
PUT /tasks/:id
Description: Replace an entire task. Requires authentication.
Request Header:
<br>
json
{
  "Authorization": "Bearer your.jwt.token"
}
<br>
Request Body:
json
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": true
}
<br>
Response:
200 OK:
<br>
json
{
  "id": "task-id",
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": true,
  "createdAt": "2023-12-10T12:00:00Z"
}
<br>
PATCH /tasks/:id
Description: Update specific fields of a task. Requires authentication.
<br>
Request Header:
<br>
json
{
  "Authorization": "Bearer your.jwt.token"
}
<br>
Request Body (example):
json
{
  "completed": true
}
<br>
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
<br>
DELETE /tasks/:id
<br>
Description: Delete a task by its ID. Requires authentication.
<br>
Request Header:
<br>
json
{
  "Authorization": "Bearer your.jwt.token"
}
<br>
Response:
200 OK:
json
{
  "message": "Task deleted successfully"
}
<br>
404 Not Found:
json
{
  "error": "Task not found"
}
<br>
6.Error Handling
<br>
The API returns appropriate HTTP status codes and error messages for various scenarios:
<br>
400 Bad Request: Validation errors.
<br>
401 Unauthorized: Invalid or missing JWT.
<br>
404 Not Found: Non-existent resources.
<br>

7.Contributors
<br>
Osama 

