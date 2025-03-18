const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Mongoose will communicate with books (plural of the name provided)
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
