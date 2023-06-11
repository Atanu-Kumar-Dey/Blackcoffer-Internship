const mongoose = require("mongoose");
const Data = require("../models/dataModel");
const Apifeatures = require("../utils/apiFeatures");

const getDistinctSector = async(req, res, next) => {
    try {
        const distinctSector = await Data.distinct("sector");
        res.locals.distinctTopic = distinctSector;
        res.json(distinctSector);
        next();
    } catch (error) {
        console.error("Error retrieving distinct relevance:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const bySectorEndYear = async(req, res) => {
    try {

        const apiFeature = new Apifeatures(Data.find(), req.query).filter();
        console.log(req.query)
        let data = await apiFeature.query;

        const intensity = data.map((entry) => ({
            topic: entry.topic,
            intensity: entry.intensity,
            relevance: entry.relevance,
            likelihood: entry.likelihood,
        }));
        console.log(intensity)
        res.json(intensity)
    } catch (error) {
        console.log(error);
    }
};
const bySectorAndTopic = async(req, res) => {
    try {

        const apiFeature = new Apifeatures(Data.find(), req.query).filter();
        console.log(req.query)
        let data = await apiFeature.query;
        let intensity = []
        data.map((entry) => {
            if (entry.end_year !== '' && entry.relevance !== '' && entry.likelihood !== '' && entry.intensity !== '') {
                intensity.push({
                    end_year: entry.end_year,
                    intensity: entry.intensity,
                    relevance: entry.relevance,
                    likelihood: entry.likelihood,
                });
            }
        });
        console.log(intensity)
        res.json(intensity)
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    bySectorEndYear,
    bySectorAndTopic,
    getDistinctSector
}