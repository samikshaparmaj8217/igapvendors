var express = require("express");
var bodyparser = require("body-parser");
var cookieparser = require("cookie-parser");
var multer = require("multer");
const  Igapvendors  = require("./models/Igapvendors");
var app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
  
      res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
      return res.status(200).json({});
    }
    next();
  
  });
  
  app.get("/", (req, res) => {
    res.send("Welcome to NodeJS");
    res.end();
  });
   
  app.use("/superadmin/igapvendors", require("./routes/igapvendors"));
  app.use("/superadmin/igapvendors", require("./routes/igapvendors"));
  app.use("/superadmin/igapvendors", require("./routes/igapvendors"));
  app.use("/superadmin/igapvendors", require("./routes/igapvendors"));
  
  
app.listen(8000, function () {
    console.log("Started");
});