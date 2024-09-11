# Task Management App

A simple task management application that allows users to perform CRUD operations on tasks, filter tasks by priority and status, and search tasks by title. The application uses Express for the backend, MongoDB for the database, React with Vite for the frontend, and Tailwind CSS for styling.

## Features

- **Create, Read, Update, Delete (CRUD) Operations**: Manage tasks with full CRUD functionality.
- **Task Priority**: Assign and filter tasks by priority levels.
- **Task Status**: Filter tasks by their current status (e.g., Pending, In Progress, Completed).
- **Search by Title**: Search for tasks by their title.

## Technologies Used

- **Frontend**:
    - React
    - Vite
    - Tailwind CSS

- **Backend**:
    - Express.js

- **Database**:
    - MongoDB
## Live Url
- Render : https://task-management-app-1o9e.onrender.com

## Getting Started

### Prerequisites

- Node.js (>=14.0.0)
- MongoDB instance (Local or Cloud)

### Installation

#### Backend

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and configure your MongoDB connection string:
    ```env
    MONGO_URI=mongoDB://URL
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

#### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Production

1. Create a `.env` file and configure your MongoDB connection string:
    ```env
    MONGO_URI=mongoDB://URL
    ```

2. Install dependencies:
    ```bash
    npm build
    ```

3. Start the frontend development server:
    ```bash
    npm run start
    ```

## API Endpoints

- **GET /api/tasks**: Retrieve all tasks.
- **POST /api/tasks**: Create a new task.
- **PUT /api/tasks/:id**: Update an existing task by ID.
- **DELETE /api/tasks/:id**: Delete a task by ID.

## Frontend Usage

1. **View Tasks**: The homepage displays a list of tasks with options to filter by priority and status.
2. **Create Task**: Use the form to add a new task with a title, priority, and status.
3. **Update Task**: Click on a task to edit its details.
4. **Delete Task**: Remove a task from the list.
5. **Search**: Use the search bar to filter tasks by title.
