const express = require("express");
const app = express();
const connectDB = require("./Config/db");
require("dotenv").config({
  path: "./Config/.env",
});
const authRoute = require("./Routes/Auth");
const userRoute = require("./Routes/User");
const productRoute = require("./Routes/Product");
const cartRoute = require("./Routes/Cart");
const orderRoute = require("./Routes/Order");
const stripeRoute = require("./Routes/Stripe");
const cors = require("cors");


connectDB();
app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
