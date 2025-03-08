# Blog Post Web App

## Overview
This is a simple and responsive Blog Post Web App built using **Node.js**, **Express.js**, **EJS**, and **PostgreSQL**. It allows users to create, view, edit, and delete blog posts. The project is designed to help users manage their blog content efficiently.

## Features
✅ Create new blog posts with ease
✅ View all blog posts on the homepage
✅ Read individual blog posts in detail
✅ Edit existing blog posts
✅ Delete posts when no longer needed
✅ Responsive design using **Bootstrap**

## Technologies Used
- **Node.js**
- **Express.js**
- **EJS**
- **PostgreSQL**
- **Bootstrap**

## Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/MrinalManu1/Blog_Post_Web_App.git
   ```
2. **Navigate to the project folder**
   ```sh
   cd Blog_Post_Web_App
   ```
3. **Install dependencies**
   ```sh
   npm install
   ```

## Database Setup
1. Ensure **PostgreSQL** is installed and running.
2. Create a database named `blogDB`.
3. Update your database connection details in the project.

## Running the Project
1. Start the development server:
   ```sh
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Fixing OpenSSL Issue (For Node.js 22+)
If you encounter the `ERR_OSSL_EVP_UNSUPPORTED` error:

1. Run the following command to enable the legacy provider:
   ```sh
   node --openssl-legacy-provider index.js
   ```

2. Alternatively, modify your `crypto` import to ensure compatibility:
   ```js
   const crypto = require('crypto');
   const hash = crypto.createHash('md5', { opensslLegacyProvider: true });
   hash.update('myData');
   console.log(hash.digest('hex'));
   ```

## Folder Structure
```
├── public
│   ├── css
│   └── js
├── views
│   ├── home.ejs
│   ├── create.ejs
│   ├── edit.ejs
│   ├── header.ejs
│   ├── footer.ejs
├── index.js
├── package.json
├── .gitignore
├── README.md
```

## Contributing
Contributions are welcome! If you'd like to improve the project, feel free to fork the repository and submit a pull request.



