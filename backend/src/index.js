const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToDB = require("./config/database");
const router = require("./router/route");
const cors = require("cors");

//middleware
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/webnotes", router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Express app Running on port ${port}`);
});
