const express = require("express");
const Data = require("../models/dataModel");
const router = express.Router();
const dataMiddleware = require("../middlewares/dataMiddleware");

router.get("/data", (req, res) => {
    res.send("ok");
});

router.get("/data/intensity", dataMiddleware.getDistinctIntensities);
router.get("/data/impact", dataMiddleware.getDistinctImpact);
router.get("/data/sector", dataMiddleware.getDistinctSector);
router.get("/data/topic", dataMiddleware.getDistinctTopic);
router.get("/data/intensity/:endyear/:topic", (req, res) => {
    try {
        const topic = req.params.topic;
        const endyear = req.params.endyear;
        Data.find({ topic: topic, end_year: endyear })
            .then((data) => {
                const intensity = data.map((item) => item.intensity);
                res.send(intensity);
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.error("Error retrieving distinct topics:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/data/:endYear/:sector", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    try {
        const endYear = req.params.endYear;
        const sector = req.params.sector;
        Data.find({ end_year: endYear, sector: sector }).then((result) => {
            const intensity = result.map((entry) => ({
                topic: entry.topic,
                intensity: entry.intensity,
                relevance: entry.relevance,
                likelihood: entry.likelihood,
            }));
            res.json(intensity);
        });
    } catch (error) {}
});

module.exports = router;