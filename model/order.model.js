const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

import OrderStageEnum from '../reference/enum/orderStage.enum.js'
import OrderTypeEnum from '../reference/enum/orderType.enum.js'

const OrderSchema = new mongoose.Schema({
    dateCreated: Date,
    dateUpdated: Date,
    client: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }],
    lab: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lab'
    }],
    stage: OrderStageEnum,
    estimateTime: String,
    estimatePrice: String,
    actualTime: String,
    actualPrice: String,
    tracking: String,
    isDeleted: Boolean,
    orderType: OrderTypeEnum
})

OrderSchema.plugin(mongoosePaginate)
const Order = mongoose.model('Order', OrderSchema, 'orders')

module.exports = Order