const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const LOGGER = require("morgan");
require("dotenv").config();

const app = express();
app.use(LOGGER("dev"));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.post("/api/razorpay/create-order", async (req, res) => {});

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on ::" + process.env.PORT || 5000)
);
