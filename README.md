# Blog Post Web App

## Overview
This is a simple **Blog Post Web App** built using **Node.js**, **Express.js**, **PostgreSQL**, and **EJS**. It allows users to create, view, edit, and delete blog posts. The application follows a secure structure with environment variables for database credentials.

## Features
✅ Create new blog posts
✅ View detailed content of posts
✅ Edit existing posts
✅ Delete posts securely
✅ Database integration using **PostgreSQL**

---

## Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/MrinalManu1/Blog_Post_Web_App.git
cd Blog_Post_Web_App
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up the Database
1. Create a PostgreSQL database (e.g., `Post`).
2. Inside your database, create a table using the following SQL command:
```sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL
);
```

### Step 4: Create `.env` File
Create a `.env` file in the root of your project with the following content:
```DATABASE_URL=postgres://your_username:your_password@your_host:your_port/your_database
PORT=3000
```


### Step 5: Start the Server
```bash
npm start
```

The app will be available at: **[http://localhost:3000](http://localhost:3000)**

---

## Usage
- Visit the homepage to see all blog posts.
- Click **"Create New Post"** to add a new post.
- Use **"Read More"** to view full content.
- Use **"Edit"** or **"Delete"** buttons to modify or remove posts.

---



## Technologies Used
- **Node.js**
- **Express.js**
- **PostgreSQL**
- **EJS**
- **Bootstrap** (for styling)

---

## Contributing
Feel free to fork the repository and submit pull requests for enhancements, bug fixes, or new features.

---

## License
This project is licensed under the **MIT License**.

---


