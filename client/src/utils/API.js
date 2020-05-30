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
    }
}