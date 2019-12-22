var express = require('express')
var router = express.Router()

const RatingController = require('../../controller/rating.controller')

router.get('/', RatingController.getRatings)
router.post('/', RatingController.createRating)
router.put('/rating_id/:rating_id', RatingController.updateRating)

module.exports = router