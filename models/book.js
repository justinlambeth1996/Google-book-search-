// setting const variable for mongoose routing and schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// settings const variable to create a new schema when saving a new book
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// creating book const component from bookschema
const Book = mongoose.model("Book", bookSchema);

// Export Book component 
module.exports = Book;
