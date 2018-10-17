var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require('fs');
var bodyParser = require('body-parser');
const request = require('request');
var xss = require("xss");
express().use(bodyParser.json());


module.exports = router;