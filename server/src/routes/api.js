const express = require("express");

const router = express.Router();
const dataControllers = require("../controllers/dataControllers");

router.get("", (req, res) => {
    res.send("ok");
});


router.route("/sector").get(dataControllers.getDistinctSector)
router.route("/piepestal").get(dataControllers.getPiePestal)
router.route("/end_Year").get(dataControllers.getDistinctEndYear)
router.route("/topic").get(dataControllers.getDistinctTopic)


router.route("/sector-endYear").get(dataControllers.bySectorEndYear)
router.route("/sector-topic").get(dataControllers.bySectorAndTopic)

module.exports = router;