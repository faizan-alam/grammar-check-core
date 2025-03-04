const express = require("express");
const cors = require("cors");
const axios = require("axios");
const router = require("./routes");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 5000;
connectDB(app);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
