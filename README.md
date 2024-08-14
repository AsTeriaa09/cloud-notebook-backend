 Backend README

### Cloud Notebook Backend

This is the backend for the Cloud Notebook application, a MERN stack project that allows users to securely create, update, and manage their notes. The backend is built with Express.js and MongoDB, using JWT for authentication and bcrypt for password hashing.

### Features

- **User Authentication:** Users can sign up and log in using their email and password. Passwords are securely hashed using bcrypt, and JWT is used for authentication.
- **CRUD Operations:** Logged-in users can create, read, update, and delete their notes.
- **Secure Access:** JWT tokens ensure that only authenticated users can access and manipulate their notes.

### Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user information and notes.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Token)**: For secure user authentication.
- **bcrypt.js**: For hashing user passwords.
- **dotenv**: For managing environment variables.
- **nodemon**: For automatic server restarts during development.
- **zod**: For schema validation.

