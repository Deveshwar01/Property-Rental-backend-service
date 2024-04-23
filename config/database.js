const mongoose = require("mongoose");

exports.dbconnect = () => {
    mongoose.connect("mongodb+srv://rental:devesh40@cluster0.10ibais.mongodb.net/", {
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
