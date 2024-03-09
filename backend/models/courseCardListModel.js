const mongoose = require('mongoose');

const courseCardListSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required: true
    },
    instructor:
    {
        type: String,
        required: true
    },
    instructorImg: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    moduleLength: {
        type: Number,
        required: true
    },
    starRating: {
        type: Number,
        required: true
    },
    lessons: {
        type: Number,
        required: true
    }
})

let schema = mongoose.model('courseCardList', courseCardListSchema);
module.exports = schema;