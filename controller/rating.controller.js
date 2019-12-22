'use strict'

var RatingService = require('../service/rating.service')

exports.getRatings = async function(req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10

    try {
        let rating = await RatingService.getRatings({}, page, limit)
        return res.status(200).json({status: 200, data: rating, message: 'Successfully received ratings'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.createRating = async function(req, res, next) {
    try {
        let rating = {
            rating: req.body.rating,
            review: req.body.review
        }
        var createdRating = await RatingService.createRating(rating)
        return res.status(201).json({status: 201, data: createdRating, message: 'Successfully created rating'})
    } catch (e) {
        return res.status(400).json({status: 400, message: 'Rating creation was unsuccessful'})
    }
}

exports.updateRating = async function(req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({status: 400., message: 'ID must be present'})
    }
    var id = req.body._id

    var rating ={
        id,
        rating: req.body.rating ? req.body.rating : null,
        review: req.body.review ? req.body.review : null
    }

    try {
        var updatedRating = await RatingService.updateRating(rating)
        return res.status(200).json({status: 200, data: updatedRating, message: 'Successfully updated rating'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.deleteRating = async function(id) {

    var id = req.params.id 

    try {
        var deleted = await RatingService.deleteRating(id)
        return res.status(204).json({status: 204, message: 'Successfully deleted rating'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}