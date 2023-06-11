const express = require("express");

const router = express.Router();
const dataControllers = require("../controllers/dataControllers");

router.get("", (req, res) => {
    res.send("ok");
});


router.route("/sector-endYear").get(dataControllers.bySectorEndYear)
router.route("/sector-topic").get(dataControllers.bySectorAndTopic)

module.exports = router;