'use strict'

const LabService = require('../service/lab.service')

exports.getLabs = async function(req, res, next) {
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10

    try {
        let lab = await LabService.getLabs({}, page, limit)
        return res.status(200).json({status: 200, data: lab, message: "Successfully received lab"})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.getLabByUsername = async function(req, res, next) {
    
    var username = req.params.username

    try {
        let foundLab = await LabService.getLabByUsername(username)
        return res.status(201).json({status: 201, data: foundLab,  message: 'Search complete'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.getLabByEmail = async function(req, res, next) {
    
    var email = req.params.email

    try {
        let foundLab = await LabService.getLabByEmail(email)
        return res.status(201).json({status: 201, data: foundLab, message: 'Search complete'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.createLab = async function(req, res, next) {

    try {
        let lab = {
            credential: req.body.credential
        }

        var createdLab = await LabService.createLab(lab)
        return res.status(201).json({status: 201, data: createdLab, message: 'Successfully created lab' })
    } catch (e) {
        return res.status(400).json({status: 400, message: 'Lab creation was unsuccessful ' + e.message})
    }
}

exports.getLabWithOrder = async function(req, res, next) {
    
    if (!req.params.id) {
        return status(400).json({status: 400, message: 'ID must be present'})
    }

    let id = req.params.id
    
    try {
        let foundLab = await UserService.getLabWithOrder(id)
        return res.status(201).json({status: 201, data: foundLab, message: 'Successfully found lab'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.updateLab = async function(req, res, next) {

    if (!req.body._id) {
        return res.status(400).json({status: 400., message: 'ID must be present'})
    }

    var id = req.body._id
    
    var lab = {
        id,
        credential: req.body.credential ? req.body.credential : null,
        company: req.body.company ? req.body.company : null,
        streetAddress: req.body.streetAddress ? req.body.streetAddress : null,
        city: req.body.city ? req.body.city : null,
        state: req.body.state ? req.body.state : null,
        zip: req.body.zip ? req.body.zip : null,
        country: req.body.country ? req.body.country : null
    }

    try {
        var updatedLab = await LabService.updateLab(lab)
        return res.status(200).json({status: 200, data: updatedLab, message: 'Successfully updated lab'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.deactivateLab = async function(req, res, next) {
    var id = req.params.id 
    
    try {
        var deleted = await LabService.deleteLab(id)
        return res.status(200).json({status: 200, message: 'Successfully deactivated lab'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}