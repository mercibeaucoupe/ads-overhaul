const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const RatingSchema = new mongoose.Schema({
    rating: Number,
    review: String,
    dateCreated: Date,
    dateUpdated: Date,
    isDeleted: Boolean
})

RatingSchema.plugin(mongoosePaginate)
const Rating = mongoose.model('Rating', RatingSchema, 'ratings')

module.exports = Rating

