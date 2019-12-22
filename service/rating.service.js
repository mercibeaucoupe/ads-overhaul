'use strict'

const Rating = require('../model/rating.model')

exports.getRatings = async function(query, page, limit) {
    var options = {
        page,
        limit
    }
    try {
        var ratings = await Rating.paginate(query, options)
        return ratings
    } catch (e) {
        throw Error('Error while paginating ratings ' + e)
    }
}

exports.createRating = async function(rating) {
    try {
        var newRating = new Rating({
            dateCreated = new Date(),
            rating = rating.rating,
            review = rating.review
        })
        var savedRating = await newRating.save()
        return savedRating
    } catch (e) {
        throw Error('Error occurred while creating rating ' + e)
    }
}

exports.updateRating = async function(rating) {
    var id = rating.id
    try {
        var oldRating = await Rating.findById(id)
    } catch (e) {
        throw Error('Error occurred while finding the rating ' + e)
    }

    if (!oldRating) {
        return false
    }

    oldRating.dateUpdated = new Date()
    oldRating.rating = rating.rating
    oldRating.review = rating.review

    try {
        let savedRating = await oldRating.save()
        return savedRating
    } catch (e) {
        throw Error('Error occurred while updating the rating ' + e)
    }
}

exports.deleteRating = async function(id) {
    try {
        var rating = await Rating.findById(id)
    } catch (e) {
        throw Error('Error occurred while finding the rating ' + e)
    }

    if (!rating) {
        return false
    }

    rating.isDeleted = true
    rating.timeUpdated = new Date()

    try {
        let savedRating = await rating.save()
        return savedRating
    } catch (e) {
        throw Error('Error occurred while updated the rating ' + e)
    }
}