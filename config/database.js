const mongoose = require("mongoose");

exports.dbconnect = () => {
    mongoose.connect("mongodb+srv://DgyQEOBDzI5VhTqT :DgyQEOBDzI5VhTqT@cluster0.10ibais.mongodb.net/", {
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
