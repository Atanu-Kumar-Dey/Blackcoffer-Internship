const express = require("express");
const Data = require("../models/dataModel");
const router = express.Router();
const dataControllers = require("../controllers/dataControllers");

router.get("", (req, res) => {
    res.send("ok");
});

router.get("/intensity", dataControllers.getDistinctIntensities);
router.get("/impact", dataControllers.getDistinctImpact);
router.get("/sector", dataControllers.getDistinctSector);
router.get("/topic", dataControllers.getDistinctTopic);

router.route("/:endYear/:sector").get(dataControllers.dataByTopics)

module.exports = router;