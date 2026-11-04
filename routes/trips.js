<<<<<<< HEAD
const Trip = require('../models/trips')
var express = require('express');
var router = express.Router();

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

// trouver les trajets en fonction de la date au format JJ/MM/AAAA
router.get('/date/:date', (req, res) => {
    const [day, month, year] = req.params.date.split('-').map(Number);
    const start = new Date(Date.UTC(year, month -1, day)); // borne basse, les mois en JS commencent à 0
    const end = new Date(Date.UTC(year, month-1, day+1)); //borne haute
    Trip.find({date: {$gte: start, $lt: end} }).then(data => {
        res.json({Trips: data})
    })
})

// trouver les trajets en fonction du départ, de l'arrivée et de la date
router.get('/search/:departure/:arrival/:date', (req, res) => {
    const {departure, arrival, date} = req.params;
    const [day, month, year] = date.split('-').map(Number);
    const start = new Date(Date.UTC(year, month -1, day));
    const end = new Date(Date.UTC(year, month-1, day+1));
    Trip.find({
        departure: {$regex: new RegExp(departure, 'i')},
        arrival: {$regex: new RegExp(arrival, 'i')},
        date: {$gte: start, $lt: end}
    }).then(data => {res.json({Trips: data})})

})

=======
var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
  const { departure, arrival, date } = req.query;

  res.json({
    message: 'Recherche de trajets',
    departure: departure,
    arrival: arrival,
    date: date
  });
});
>>>>>>> cd2ed85e67f10761e915c899daa81b81fcb9cf94

module.exports = router;