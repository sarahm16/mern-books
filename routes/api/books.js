const express = require("express");
const router = express.Router();

const Book = require('../../models/bookSchema');

router.post('/save', function(req,res) {
    const book = req.body
    //console.log('book: ' + book)
    Book.findOne({infoLink: book.infoLink})
        .then(res => {
            if(res == null) {
                Book.create(book)
                .then(bookdb => {
                    res.json(bookdb)
                })
            }
        })
})

router.get('/save', function(req,res) {
    Book.find({})
        .then(books => {
            res.json(books)
        })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    Book.findByIdAndDelete(id, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
      })
})

module.exports = router