const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    name: {
        type: String,
    },
    qty: {
        type: Number,
    },
    price: {
        type: Number,
    },
    mode: {
        type: String,
    }
});

module.exports = { OrdersSchema };