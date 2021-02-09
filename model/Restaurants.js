const mongoose = require('mongoose');
const RestaurantsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    log: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model("Restaurants", RestaurantsSchema);