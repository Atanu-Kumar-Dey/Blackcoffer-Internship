const mongoose = require("mongoose");
const Data = require("../models/dataModel");
const Apifeatures = require("../utils/apiFeatures");

const getDistinctSector = async(req, res, next) => {
    try {
        const distinctSector = await Data.distinct("sector");
        res.locals.distinctTopic = distinctSector;

        let returnData = [];
        distinctSector.map((entry) => {
            if (entry !== "") {
                returnData.push(entry);
            }
        });

        res.json(returnData);
    } catch (error) {
        console.error("Error retrieving distinct relevance:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const getDistinctCountry = async(req, res, next) => {
    try {
        const distinctSector = await Data.distinct("pestle");
        res.locals.distinctTopic = distinctSector;

        let pestleData = [];
        distinctSector.map((entry) => {
            if (entry !== "") {
                pestleData.push(entry);
            }
        });
        const returnData = await Data.find({
            pestle: { $in: pestleData },
        }).distinct("topic", "pestle");
        res.json(returnData);
    } catch (error) {
        console.error("Error retrieving distinct country:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const getDistinctEndYear = async(req, res, next) => {
    try {
        const distinctEndYear = await Data.distinct("end_year");
        res.locals.distinctTopic = distinctEndYear;

        let returnData = [];
        distinctEndYear.map((entry) => {
            if (entry !== "") {
                returnData.push(entry);
            }
        });

        res.json(returnData);
    } catch (error) {
        console.error("Error retrieving distinct relevance:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const getDistinctTopic = async(req, res, next) => {
    try {
        const distinctTopic = await Data.distinct("topic");
        res.locals.distinctTopic = distinctTopic;
        
        let returnData =[]
        distinctTopic.map((entry) => {
            
            if (entry !== '') {
                returnData.push(entry)
            }
        })
    
        res.json(returnData);
       
    } catch (error) {
        console.error("Error retrieving distinct relevance:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const bySectorEndYear = async(req, res) => {
    try {
        const apiFeature = new Apifeatures(Data.find(), req.query).filter();
        console.log(req.query);
        let data = await apiFeature.query;

        const intensity = data.map((entry) => ({
            topic: entry.topic,
            intensity: entry.intensity,
            relevance: entry.relevance,
            likelihood: entry.likelihood,
        }));

        res.json(intensity);
    } catch (error) {
        console.log(error);
    }
};
const bySectorAndTopic = async(req, res) => {
    try {
        const apiFeature = new Apifeatures(Data.find(), req.query).filter();
        console.log(req.query);
        let data = await apiFeature.query;
        let intensity = [];
        data.map((entry) => {
            if (
                entry.end_year !== "" &&
                entry.relevance !== "" &&
                entry.likelihood !== "" &&
                entry.intensity !== ""
            ) {
                intensity.push({
                    end_year: entry.end_year,
                    intensity: entry.intensity,
                    relevance: entry.relevance,
                    likelihood: entry.likelihood,
                });
            }
        });

        res.json(intensity);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    bySectorEndYear,
    bySectorAndTopic,
    getDistinctSector,
    getDistinctEndYear
}