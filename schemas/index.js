const mongoose = require("mongoose")

mongoose.connect(
    "mongodb+srv://uwu:uwu@cluster0-bqylj.gcp.mongodb.net/relaciones?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection
db.once("open", function() {
    console.log("Base de datos abierta")
})

const Book = require("./Book")
const User = require("./User")

module.exports = {
    Book,
    User
}
