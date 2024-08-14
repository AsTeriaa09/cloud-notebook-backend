const express = require("express");
var cors = require("cors");
const app = express();
const connectToMongo = require("./Db");
const Authrouter = require("./Routes/AuthRoutes");
const notesRouter = require("./Routes/NotesRouter");
const errorMiddleware = require("./middlewares/errorMiddleware");

// cors
var corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,DELETE,PATCH,HEAD,PUT",
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
};
// using cors as a middleware
app.use(cors(corsOptions));

// must add middleware to send req in json
app.use(express.json());

// routes
app.use("/api/auth", Authrouter);
app.use("/api/notesRoute", notesRouter);

// error middleware
app.use(errorMiddleware);

const PORT = 4000;

connectToMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`the server is running at port : ${PORT}`);
  });
});
