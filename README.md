# MERN Assessment: RESTful API with Express.js and MongoDB

## Introduction

This project is a **RESTful API** built using **Express.js** and **MongoDB**. It implements **CRUD operations** for task management and includes **JWT-based authentication** to protect endpoints.

---

## Features

- **User Authentication**: Secure login with JWT authentication.
- **Task Management**:  
  - Create, Read, Update, and Delete tasks.  
  - Support for both **full updates** (`PUT`) and **partial updates** (`PATCH`).  
- **Error Handling**: Meaningful error messages with proper HTTP status codes.  
- **Middleware Protection**: JWT-based authentication for secured routes.  
- **Environment-based Configuration**.

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
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:  
   Create a `.env` file in the project root and add the following:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/mern-assessment
   JWT_SECRET=your_secret_key
   PORT=8000
   JWT_SECRET_EXPIRES_IN=1h
   ```

4. Start the application:
   ```bash
   npm run dev
   ```

---

## API Endpoints

### **Authentication**

#### **Login**
- **Endpoint:** `POST /login`  
- **Description:** Authenticate a user and return a JWT token.  

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Responses:**
- **200 OK**
  ```json
  {
    "token": "your.jwt.token"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "error": "Invalid email or password"
  }
  ```

---

### **Task Management**

#### **Fetch All Tasks**
- **Endpoint:** `GET /tasks`
- **Description:** Retrieve all tasks.
- **Query Parameters:**  
  - `?page` (optional): Page number for pagination.  
  - `?limit` (optional): Number of tasks per page.

**Response:**
- **200 OK**
  ```json
  [
    {
      "id": "task1",
      "title": "Task Title",
      "description": "Task Description",
      "completed": false,
      "createdAt": "2023-12-10T12:00:00Z"
    }
  ]
  ```

#### **Create a New Task**
- **Endpoint:** `POST /tasks`
- **Description:** Create a new task (requires authentication).
- **Headers:**
  ```json
  {
    "Authorization": "Bearer your.jwt.token"
  }
  ```

**Request Body:**
```json
{
  "title": "New Task",
  "description": "Task Details",
  "completed": false
}
```

**Response:**
- **201 Created**
  ```json
  {
    "id": "new-task-id",
    "title": "New Task",
    "description": "Task Details",
    "completed": false,
    "createdAt": "2023-12-10T12:00:00Z"
  }
  ```

#### **Fetch a Task by ID**
- **Endpoint:** `GET /tasks/:id`
- **Description:** Retrieve a specific task by ID (requires authentication).

#### **Update a Task (Full Update)**
- **Endpoint:** `PUT /tasks/:id`
- **Description:** Replace an entire task (requires authentication).

#### **Update a Task (Partial Update)**
- **Endpoint:** `PATCH /tasks/:id`
- **Description:** Update specific fields of a task (requires authentication).

#### **Delete a Task**
- **Endpoint:** `DELETE /tasks/:id`
- **Description:** Delete a task by ID (requires authentication).

---

## Error Handling

The API returns appropriate HTTP status codes and error messages for different scenarios:

- **400 Bad Request**: Validation errors.
- **401 Unauthorized**: Invalid or missing JWT.
- **404 Not Found**: Requested resource not found.

---

## Contributors

- **Osama Ayub**  

