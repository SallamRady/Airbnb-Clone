// require our pachages
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.route");
const placeRouter = require("./routes/place.route");
const cookiesParser = require("cookie-parser");
const multer = require("multer");
//declare our variables
const port = process.env.PORT || 3000;
// create our express application
const app = express();
// app configration
app.use(cookiesParser());
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(express.static("public"));
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + "_" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  )
    cb(null, true);
  else cb(null, false);
};
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).array("images")
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PUTCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(authRouter);
app.use(placeRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(port, () =>
      console.log(`Express Server listening on port ${port}!`)
    );
  })
  .catch((err) => {
    console.log("error in DB connection :", err);
  });
