const { Schema, model, Types } = require("mongoose")

const UserSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    books: [{ type: Types.ObjectId, ref: "Book" }],
    favoriteBook: { type: Types.ObjectId, ref: "Book" }
})

const User = model("User", UserSchema)

module.exports = User
