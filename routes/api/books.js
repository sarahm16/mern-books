const express = require("express");
const router = express.Router();

const Book = require('../../models/bookSchema');

router.post('/save', function(req,res) {
    const book = req.body
    // console.log('book: ')
    // console.log(book)
    //console.log(infoLink)
    Book.findOne({infoLink: book.infoLink})
        .then(res => {
            if(res == null) {
                Book.create(book)
                .then(bookdb => {
                    res.json(bookdb)
                })
            }
        })

    // Book.create(book)
    //     .then(bookdb => {
    //         res.json('api book');
    //         res.json(bookdb)
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     })
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