'use strict'

const Order = require('../model/order.model')
const OrderStageEnum = require('../reference/enum/orderStage.enum')

exports.getOrders = async function(query, page, limit) {
    var options = {
        page,
        limit
    }
    try {
        var orders = await Order.paginate(query, options)
        return orders
    } catch (e) {
        throw Error('Error while paginating orders ' + e)
    }
}

exports.createOrder = async function(order) {
    try {
        var newOrder = new Order({
            dateCreated: new Date(),
            client: order.client,
            lab: order.lab,
            stage: OrderStageEnum.New,
            estimateTime: order.estimateTime,
            estimatePrice: order.estimatePrice,
            actualTime: order.actualTime,
            actualPrice: order.actualPrice,
            tracking: order.tracking,
            orderType: order.OrderTypeEnum
        })
        var savedOrder = await newOrder.save()
        return savedOrder
    } catch (e) {
        throw Error('Error occurred while creating order ' + e)
    }
}

exports.updateOrder = async function(order) {
    var id = order.id
    try {
        var oldOrder = await Order.findById(id)
    } catch (e) {
        throw Error('Error occurred while finding the order ' + e)
    }

    if (!oldOrder) {
        return false
    }

    oldOrder.dateUpdated = new Date()
    oldOrder.client = order.client
    oldOrder.lab = order.lab
    oldOrder.stage = order.stage
    oldOrder.estimateTime = order.estimateTime
    oldOrder.estimatePrice = order.estimatePrice
    oldOrder.actualTime = order.actualtime
    oldOrder.actualPrice = order.actualPrice
    oldOrder.tracking = order.tracking
    oldOrder.orderType = order.orderType

    try {
        let savedOrder = await oldOrder.save()
        return savedOrder
    } catch (e) {
        throw Error('Error occurred while updating the order ' + e)
    }
}

exports.deleteOrder = async function(id) {
    try {
        var order = await Order.findById(id)
    } catch (e) {
        throw Error('Error occurred while finding the order ' + e)
    }

    if (!order) {
        return false
    }

    order.isDeleted = true
    order.timeUpdated = new Date()

    try {
        let savedOrder = await order.save()
        return savedOrder
    } catch (e) {
        throw Error('Error occurred while updating the order ' + e)
    }
}