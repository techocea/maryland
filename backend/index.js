const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const formRoute = require("./routes/formRoute");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

//database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/grameen")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

//routes
app.use("/api/contact", formRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
app.get("/", (req, res) => {
  res.json("Hello from the Brescia Grameen Server");
});
