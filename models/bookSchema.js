const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bookSchema = new Schema({
    authors: {
        type: String
    },
    description: {
        type: String
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    infoLink: {
        type: String
    }
})

const Book = mongoose.model('books', bookSchema);

module.exports = Book

//test