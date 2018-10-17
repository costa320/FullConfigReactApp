require('dotenv').config()
const express = require("express");
const app = express();
var router = express.Router();
const path = require("path");
var Router = require("./router/Router");

var logger = require("morgan");
var bodyParser = require("body-parser");

var optionsStatic = {
    index: false,
    etag: false
}

app.use(logger(process.env.MORGANLEVEL));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname, "build"), optionsStatic));

/* GESTIONE ROUTING REACT E VARI REFRESH RICHIESTI DAL BROWSER */
router.get("/", function (req, res, next) {
    res
        .sendFile(path.join(__dirname, "build/index.html"), function (err) {
            if (err) {
                console.log('INDEX.HTML NOT FOUND ERROR!');
                res
                    .status(500)
                    .send(err);
            }
        });

});

/* Routes */
app.use(Router);
app.use(router);
/* app.use('/users', Users); */


process.env.PORT = process.env.PORT || 5000;
app.listen(process.env.PORT);
console.log("APP Listening On Port : " + process.env.PORT);
console.log("enviroment: " + process.env.enviroment);

app.use('/static', express.static(path.resolve(__dirname, "build")));