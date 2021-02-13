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
    rating: {
        type: Number
    },
    infoLink: {
        type: String
    },
    key: {
        type: Number
    }
})

const Book = mongoose.model('books', bookSchema);

module.exports = Book

//test 