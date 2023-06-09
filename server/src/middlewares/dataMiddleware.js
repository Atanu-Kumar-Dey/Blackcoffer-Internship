const mongoose = require("mongoose");
const Data = require("../models/dataModel");

const getDistinctIntensities = async(req, res, next) => {
    try {
        const distinctIntensities = await Data.distinct("intensity");
        res.locals.distinctIntensities = distinctIntensities;
        res.send(distinctIntensities);
        next();
    } catch (error) {
        console.error("Error retrieving distinct intensities:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getDistinctImpact = async(req, res, next) => {
    try {
        const distinctImpact = await Data.distinct("impact");
        res.locals.distinctImpact = distinctImpact;
        res.send(distinctImpact);
        next();
    } catch (error) {
        console.error("Error retrieving distinct impact:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const getDistinctSector = async(req, res, next) => {
    try {
        const distinctSector = await Data.distinct("sector");
        res.locals.distinctSector = distinctSector;
        res.send(distinctSector);
        next();
    } catch (error) {
        console.error("Error retrieving distinct sector:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getDistinctTopic = async(req, res, next) => {
    try {
        const distinctTopic = await Data.distinct("topic");
        res.locals.distinctTopic = distinctTopic;
        res.send(distinctTopic);
        next();
    } catch (error) {
        console.error("Error retrieving distinct relevance:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    getDistinctIntensities,
    getDistinctImpact,
    getDistinctSector,
    getDistinctTopic
};