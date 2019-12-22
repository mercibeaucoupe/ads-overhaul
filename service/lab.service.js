'use strict'

const Lab = require('../model/lab.model')

exports.getLabs = async function(query, page, limit) {
    var options = {
        page,
        limit
    }
    try {
        var labs = await Lab.paginate(query, options)
        return labs
    } catch (e) {
        throw Error('Error while paginating labs ' + e)
    }
}

exports.createLab = async function(lab) {
    try {
        var newLab = new Lab({
            credential: lab.credential
        })
        var savedLab = await newLab.save()
        return savedLab
    } catch (e) {
        throw Error('Error occurred while creating lab ' + e)
    }
}

exports.updateLab = async function(lab) {
    var id = lab.id
    try {
        var oldLab = await Lab.findById(id)
    } catch (e) {
        throw Error('Error occurred while finding the lab ' + e)
    }

    if (!oldLab) {
        return false
    }

    oldLab.credential = lab.credential
    oldLab.company = lab.company
    oldLab.streetAddress = lab.streetAddress
    oldLab.city = lab.city
    oldLab.state = lab.state
    oldLab.zip = lab.zip
    oldLab.country = lab.country
    oldLab.timeUpdated = new Date()

    try {
        let savedLab = await oldLab.save()
        return savedLab
    } catch (e) {
        throw Error('Error occurred while updating the lab ' + e) 
    }
}

exports.deactivateLab = async function(id) {
    try {
        var lab = await Lab.findById(id)
    } catch (e) {
        throw Error('Error occurred while finding the lab ' + e)
    }

    if (!lab) {
        return false
    }

    lab.isActive = false
    lab.timeUpdated = new Date()

    try {
        let savedLab = await lab.save()
        return savedLab
    } catch (e) {
        throw Error('Error occurred while updating the lab ' + e)
    }
}

/**
 * Shouldn't really be used but adding it as a utility.
 */
exports.deleteLab = async function(id) {
    try {
        var deleted = await Lab.remove({_id: id})
        if (deleted.result.n === 0) {
            throw Error('Lab could not be deleted')
        }
        return deleted
    } catch (e) {
        throw Error('Error occurred while deleting the lab ' + e)
    }
}