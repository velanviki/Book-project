require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://viki:bookstore@cluster0.vof27.mongodb.net/bookstore?retryWrites=true&w=majority"

mongoose. connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT||PORT, () => console.log(`Server Running on Port: ${PORT}`)))
.catch((error) => console.log( error.message));