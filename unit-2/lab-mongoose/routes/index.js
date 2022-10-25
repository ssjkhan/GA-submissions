var express = require("express");
var router = express.Router();
var flightCtrl = require("../controllers/flights");

router.get("/", flightCtrl.show);
router.get("/show", flightCtrl.show);
router.get("/show/:flightNo", flightCtrl.showFlight);

router.post("/show/:flightNo", flightCtrl.addDestination);

router.get("/add", flightCtrl.add);
router.post("/add", flightCtrl.new);

module.exports = router;
