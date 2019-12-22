var express = require('express')
var router = express.Router()

const LabController = require('../../controller/lab.controller')

router.get('/', LabController.getLabs)
router.post('/', LabController.createLab)
router.put('/lab_id/:lab_id', LabController.updateLab)
