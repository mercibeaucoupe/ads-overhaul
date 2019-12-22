var express = require('express')
var router = express.Router()

const ClientController = require('../../controller/client.controller')

router.get('/', ClientController.getClients)
router.get('/client_id/:client_id', ClientController.getClient)
router.post('/', ClientController.createClient)
router.put('/', ClientController.updateClient)

module.exports = router