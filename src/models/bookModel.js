const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema 
( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "rahulAuthor",
        required: true
    },
    price: Number,
    rating: Number,
    publisher_id: {
        type: ObjectId,
        ref: "rahulPublisher",
        required: true
    },
    isHardCover: {
        type: Boolean,
        default: false
    },   
}, {timestamps: true});

module.exports = mongoose.model('bookAuthor', bookSchema);