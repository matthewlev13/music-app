const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const router = express.Router();
const mongoose = require("mongoose");
app.use(cors());


let key = require("./model");

mongoose.connect("mongodb://127.0.0.1:27017/key", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});


app.use("/", router);

router.route("/getData").get(function(req, res) {
    key.find({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});


