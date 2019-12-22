const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const ClientSchema = new mongoose.Schema({
    credential: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Credential'
    }],
    company: String,
    streetAddress: String,
    city: String,
    state: String,
    country: String,
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    dateCreated: Date,
    dateUpdated: Date,
    isActive: Boolean,
    isDeleted: Boolean
})

ClientSchema.plugin(mongoosePaginate)
const Client = mongoose.model('Client', ClientSchema, 'clients')

module.exports = Client