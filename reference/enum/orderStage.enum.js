export const OrderStageEnum = Object.freeze({
    NEW: Symbol(0),
    PENDING: Symbol(1),
    CLIENT_SHIP: Symbol(2),
    LAB_RECEIVE: Symbol(3),
    WORKING: Symbol(4),
    LAB_SHIP: Symbol(5),
    FINISHED: Symbol(6),
    PAYMENT: Symbol(7)
})