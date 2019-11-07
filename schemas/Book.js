const { Schema, model, Types } = require("mongoose")

const BookSchema = new Schema({
    name: String,
    publishedDate: Date,
    pageNumber: Number,
    author: { type: Types.ObjectId, ref: "User" }
})

const Book = model("Book", BookSchema)

module.exports = Book
