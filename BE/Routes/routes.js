const express = require("express");
const controller = require("../Controller/controller");


const router = express.Router();

router.get("/home", controller.GetHomePage);

router.get("/detail", controller.GetHomeDetail);


module.exports = router;
