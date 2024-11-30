require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const todoRoutes = require("./routes/user");

app.use(cors());
app.use(express.json());
app.use("/api", todoRoutes);

app.listen(port);
