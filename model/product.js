const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cateogary: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: "product should have atleast one cateogary"
        }
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: "product should have atleast one color"
        }
    }
})