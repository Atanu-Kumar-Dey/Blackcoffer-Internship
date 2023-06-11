const express = require("express");
const connectDB = require("./src/utils/database");
const apiRouter = require("./src/routes/api");
require("dotenv").config();
const cors = require("cors");

const app = express();
const fs = require("fs");
// Connect to the database
connectDB();

const corsOption = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOption));
// Mount the API routes
app.use("/api", apiRouter);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});