const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

import Credential from '../credential.model.js'

const LabSchema = new mongoose.Schema({
    credential: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Credential'
    }],
    company: String,
    streetAddress: String,
    city: String,
    state: String,
    zip: String,
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
    lastOrder: Date,
    isActive: Boolean,
    isDeleted: Boolean,
})

LabSchema.plugin(mongoosePaginate)
const Lab = mongoose.model('Lab', LabSchema, 'labs')

module.exports = Lab