const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const passport = require("passport");
// const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);
// const methodOverride = require("method-override");
// const flash = require("express-flash");
// const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
// const postRoutes = require('./routes/posts')

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });


//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

app.use("/", mainRoutes);
// app.use('/post', postRoutes )



app.listen(process.env.PORT, () => {
    console.log(`Server is running at PORT ${process.env.PORT}`);
  });
  