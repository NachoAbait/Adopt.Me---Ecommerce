
const mongoose = require("mongoose");


const uri = `mongodb+srv://noesneda:aleli123@proyecto.hbyeplt.mongodb.net/?retryWrites=true&w=majority`

mongoose.set("strictQuery", false);

mongoose.connect(uri,
    console.log("DB is conected")
);

