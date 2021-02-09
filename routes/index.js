var express = require('express');
var router = express.Router();
const Restaurants = require('../model/Restaurants');
const mongoose = require('mongoose');
/* GET home page. */
router.get('/', async(req, res) => {
    const result = await Restaurants.find().sort('name')
    res.send(result);
});

router.post('/', async(req, res) => {
    let restaurants = new Restaurants(req.body);
    restaurants = await restaurants.save();
    res.send(restaurants);
});

module.exports = router;