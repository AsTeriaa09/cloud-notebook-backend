This is the backend for the Cloud Notebook application, a MERN stack project that allows users to securely create, update, and manage their notes. The backend is built with Express.js , Node.js and MongoDB for database.

backend features : 
1.User Authentication: Users can sign up and log in using their email and password. Passwords are securely hashed using bcrypt, and JWT is used for authentication.
2.CRUD Operations: Logged-in users can create, read, update, and delete their notes.
3.Secure Access: JWT tokens ensure that only authenticated users can access and manipulate their notes.

Tech Stack used in backend : 
1.Node.js: Server-side JavaScript runtime.
2.Express.js: Web application framework for Node.js.
3.MongoDB: NoSQL database for storing user information and notes.
4.Mongoose: ODM (Object Data Modeling) library for MongoDB.
5.JWT (JSON Web Token): For secure user authentication.
6.bcrypt.js: For hashing user passwords.
7.dotenv: For managing environment variables.
8.nodemon: For automatic server restarts during development.
9.zod: For schema validation.
