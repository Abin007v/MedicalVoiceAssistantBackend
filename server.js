const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/main", (req, res) => {
  res.send({ name: "abin", arr: [12, 3, 6, 4, 5, 5] });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server has started on port ${PORT}`));
