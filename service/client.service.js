'use strict'

var Client = require('../model/client.model')

exports.getClient = async function(query, page, limit) {
    var options = {
        page,
        limit
    }
    try {
        var client = await Client.paginate(query, options)
        return client
    } catch (e) {
        throw Error('Error while paginating clients ' + e)
    }
}

exports.createClient = async function(client) {
    try {
        var newClient = new Client({
            credential: client.credential,
            timeCreated: new Date()
        })
        var savedClient = await newClient.save()
        return savedClient
    } catch (e) {
        throw Error('Error occurred while creating client ' + e)
    }
}

exports.updateClient = async function(client) {
    var id = client.id
    try {
        var oldClient = await Client.findById(id)
    } catch (e) {
        throw Error('Error occurred while finding the client ' + e)
    }

    if (!oldClient) {
        return false
    }

    oldClient.credential = client.credential
    oldClient.company = client.company
    oldClient.streetAddress = client.streetAddress
    oldClient.city = client.city
    oldClient.state = client.state
    oldClient.zip = client.zip
    oldClient.country = client.country
    oldClient.timeUpdated = new Date()

    try {
        let savedClient = await oldClient.save()
        return savedClient
    } catch (e) {
        throw Error('Error occurred while updating the client ' + e)
    }
}

exports.deactivateClient = async function(id) {
    try {
        var client = await Client.findById(id)
    } catch (e) {
        throw Error('Error occurred while finding the client ' + e)
    }

    if (!client) {
        return false
    }

    client.isActive = false
    client.timeUpdated = new Date()

    try {
        let savedClient = await client.save()
        return savedClient
    } catch (e) {
        throw Error('Error occurred while updating the client ' + e)
    }
}

exports.deleteClient = async function(id) {
    try {
        var deleted = await Client.remove({_id: id})
        if (deleted.result.n === 0) {
            throw Error('Client could not be deleted')
        }
        return deleted
    } catch (e) {
        throw Error('Error occurred while deleting the client ' + e)
    }
}