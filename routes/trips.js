const Trip = require('../models/trips')
var express = require('express');
var router = express.Router();

// trouver les trajets en fonction du départ
router.get('/departure/:departure', (req,res) => {
    Trip.find({departure: req.params.departure}).then(data => {
        res.json({allTrips: data})
    })
})

module.exports = router;