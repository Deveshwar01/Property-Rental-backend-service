const mongoose = require("mongoose");

exports.dbconnect = () => {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "RentalProperty",
    }).then(() => {
        console.log("DB connected successfullyss");
    })
        .catch((err) => {
            console.log("Db connection issues");
            console.log(err);
            process.exit(1);
        })
}
