const Trip = require('../models/trips')
var express = require('express');
var router = express.Router();
const {dayRange} = require('../modules/dateRange')

// trouver les trajets en fonction du départ
router.get('/departure/:departure', (req,res) => {
    Trip.find({departure: req.params.departure}).then(data => {
        res.json({Trips: data})
    })
})

// trouver les trajets en fonction de l'arrivée
router.get('/arrival/:arrival', (req,res) => {
    Trip.find({arrival: req.params.arrival}).then(data => {
        res.json({Trips: data})
    })
})

// trouver les trajets en fonction de la date au format JJ-MM-AAAA
router.get('/date/:date', (req, res) => {
    const {start, end} = dayRange(req.params.date);
    Trip.find({date: {$gte: start, $lt: end} }).then(data => {
        res.json({Trips: data})
    })
})

// trouver les trajets en fonction du départ, de l'arrivée et de la date
router.get('/search/:departure/:arrival/:date', (req, res) => {
    const {departure, arrival, date} = req.params;
    const {start, end} = dayRange(date);
    Trip.find({
        departure: {$regex: new RegExp(departure, 'i')},
        arrival: {$regex: new RegExp(arrival, 'i')},
        date: {$gte: start, $lt: end}
    }).then(data => {res.json({Trips: data})})

})


module.exports = router;