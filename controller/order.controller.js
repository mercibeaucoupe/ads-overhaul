'use strict'

const OrderService = require('../service/order.service')

exports.getOrders = async function(req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10

    try {
        let order = await OrderService.getOrders({}, page, limit)
        return res.status(200).json({status: 200, data: order, message: 'Successfully received orders'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.getOrder = async function(req, res, next) {
    if (!req.params.id) {
        return res.status(400).json({status: 400, message: 'ID must be present'})
    }

    let id = req.params.id

    try {
        var order = await OrderService.getOrderById(id)
        return res.status(201).json({status: 201, data: order, message: 'Successfully received order'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.createOrder = async function(req, res, next) {
    try {
        let order = {
            client: req.body.client,
            lab: req.body.lab,
            stage: req.body.stage,
            estimateTime: req.body.estimateTime,
            estimatePrice: req.body.estimatePrice,
            actualTime: req.body.actualTime,
            actualPrice: req.body.actualPrice,
            tracking: req.body.tracking,
            orderType: req.body.orderType
        }

        var createdOrder = await OrderService.createOrder(order)
        return res.status(201).json({status: 201, data: createdOrder, message: 'Successfully created order'})
    } catch (e) {
        return res.status(400).json({status: 400, message: 'Order creation was unsuccessful'})
    }
}

exports.updateOrder = async function(req, res, next) {
    if (!req.body.id) {
        return res.status(400).json({status: 400, message: 'ID must be present'})
    }

    var id = req.body.id
    
    var order = {
        id,
        client: req.body.client ? req.body.client : null,
        lab: req.body.lab ? req.body.lab : null,
        stage: req.body.stage ? req.body.stage : null,
        estimateTime: req.body.estimateTime ? req.body.estimateTime : null,
        estimatePrice: req.body.estimatePrice ? req.body.estimatePrice : null,
        actualTime: req.body.actualTime ? req.body.actualTime : null,
        actualPrice: req.body.actualPrice ? req.body.actualPrice : null,
        tracking : req.body.tracking ? req.body.tracking : null,
        orderType: req.body.orderType ? req.body.orderType : null
    }

    try {
        var updatedOrder = await OrderService.updateOrder(order)
        return res.status(200).json({status: 200, data: updatedOrder, message: 'Successfully updated order'})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.deleteOrder = async function(req, res, next) {
    if (!req.body.id) {
        return res.status(400).json({status: 400, message: 'ID must be present'})
    }

    var id = req.body.id
    try {
        var deleted = await OrderService.deleteOrder(id)
        return res.status(204).json({status: 204, data: deleted, message: 'Successfully flagged for deletion'})
    } catch (e) {
        return res.status(400).json({status: 400, message: error.message})
    }
}