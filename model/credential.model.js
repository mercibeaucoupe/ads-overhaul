const mongoose = require('mongoose')
const mongoosePaginate = require('mongoosePaginate')

const CredentialSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    cell: String,
    businessNumber: String,
    client: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }],
    lab: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lab'
    }],
    dateCreated: date,
    dateUpdated: date,
    ipaddress: String
})

CredentialSchema.plugin(mongoosePaginate)
const Credential = mongoose.model('Credential', CredentialSchema, 'credentials')

module.exports = Credential