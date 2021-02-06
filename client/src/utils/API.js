import React from 'react';
import axios from 'axios';

export default {
    save: function(book) {
        console.log(book)
        let saved = {
            authors: book.authors[0],
            image: book.image,
            title: book.title,
            description: book.description,
            infoLink: book.infoLink
        }
        console.log(saved)
        axios.post('/api/books/save', saved)
            .then(res => {console.log(res)})
    },

    getSaved: function() {
        return axios.get('/api/books/save')
    },

    delete: function(id) {
        console.log('delete id: ' + id)
        axios.delete(`/api/books/delete/${id}`)
    },

    getTopBooks: function(category) {
        console.log('get top books')
        return axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=YLRu8vMG4O15ZF864mptE1hqX6Mni5TC`)
    },

    getRating: function(isbn) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(res => {
                console.log(res.data.items[0].volumeInfo.averageRating)
                return res.data.items[0].volumeInfo.averageRating
            })
    },

    getListNames: function() {
        axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=YLRu8vMG4O15ZF864mptE1hqX6Mni5TC')
            .then(res => {
                console.log(res)
            })
    }
    //9781683838265
}