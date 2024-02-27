const express = require("express");
const Redis = require("ioredis");
const app = express();
const cors = require("cors");
const PORT = 8001;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const user_route = require("../src/routes/userRoutes");
const jobRouter = require("./routes/jobRoutes");
const adminRoute = require("./routes/adminRoutes");
const companyRoute = require("./routes/companyRoutes");

dotenv.config();

const redis = new Redis({
  host: "127.0.0.1",
  port: 6379,
});


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //middle ware :push a request body inside request object

mongoose
  .connect(process.env.DB_CONNECT, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.use((req, res, next) => {
  req.redis = redis;
  next();
});

app.use("/user", user_route);
app.use("/jobs", jobRouter);
app.use("/admin", adminRoute);
app.use("/company", companyRoute);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
