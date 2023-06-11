const mongoose = require("mongoose");
const Data = require("../models/dataModel");
const fs = require("fs");
const path = require("path");


// Storing given json data into mongodb atlas
async function storeData() {
    try {
        console.log("Checking if there is data inside database");
        const documentCount = await Data.countDocuments();
        if (documentCount === 0) {
            const jsonFilePath = path.resolve(__dirname, "jsondata.json");
            console.log("Database is empty so storing data...");
            // Read JSON file
            const jsonData = fs.readFileSync(jsonFilePath, "utf8");

            //Parsing the data json data
            const dataArray = JSON.parse(jsonData);

            // Storing data into database
            Promise.all(
                    dataArray.map((data) => {
                        const newData = new Data(data);
                        return newData.save();
                    })
                )
                .then(() => {
                    console.log("All data saved successfully");
                })
                .catch((error) => {
                    console.error("Error saving data:", error);
                });
        } else console.log("Data already stored!!");
    } catch (error) {
        console.log("Error", error);
    }
}



const connectDB = async() => {
    console.log("process.env.MONGODB_ATLAS_URI", process.env.MONGODB_ATLAS_URI);
    mongoose
        .connect(process.env.MONGODB_ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        })
        .then(() => {
            console.log("Connected to MongoDB");

            // Store data function
            storeData();
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
};

module.exports = connectDB;