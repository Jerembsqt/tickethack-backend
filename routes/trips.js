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

module.exports = router;