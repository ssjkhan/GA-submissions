var express = require("express");
var router = express.Router();
var skillCtrl = require("../controllers/skills");

router.get("/", skillCtrl.index);

router.get("/add", skillCtrl.add);
router.post("/add", skillCtrl.addNew);

router.get("/show/:skillName", skillCtrl.show);

router.post("/show/:skillName", skillCtrl.deleteOne);
router.delete("/show/:skillName", skillCtrl.deleteOne);

module.exports = router;
