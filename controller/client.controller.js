'use strict'

const ClientService = require('../service/client.service')

exports.getClients = async function(req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10

    try {
        let client = await ClientService.getClients({}, page, limit)
        return res.status(200).json({status: 200, data: client, message: 'Successfully received clients'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.createClient = async function(req, res, next) {
    try {
        let client = {
            credential: req.body.credential
        }

        var createdClient = await ClientService.createClient(client)
        return res.status(201).json({status: 201, data: createdClient, message: "Successfully created client"})
    } catch (e) {
        return res.status(400).json({stauts: 400, message: 'Client creation was unsuccessful ' + e.message})
    }
}

exports.updateClient = async function(req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({status: 400., message: 'ID must be present'})
    }
    var id = req.body._id
    var client = {
        id,
        credential: req.body.credential ? req.body.credential : null,
        company: req.body.company ? req.body.company : null,
        streetAddress: req.body.streetAddress ? req.body.streetAddress: null,
        city: req.body.city ? req.body.city : null,
        state: req.body.state ? req.body.state : null,
        zip: req.body.zip ? req.body.zip : null,
        country: req.body.country ? req.body.country : null
    }
    try {
        var updatedClient = await ClientService.updatedClient(client)
        return res.status(200).json({status: 200, data: updatedClient, message: 'Successfully updated client'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.deactiveClient = async function(req, res, next) {
    var id = req.params.id
    try {
        var deleted = await ClientService.deleteClient(id)
        return res.status(200).json({status: 200, message: 'Successfully deactivated client'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}