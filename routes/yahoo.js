const express = require("express");
const router = express.Router();

const yahooController = require("../controllers/yahoo/yahoo");

router.get("/api/yahoo/getdata", yahooController.getData);

module.exports = router;
