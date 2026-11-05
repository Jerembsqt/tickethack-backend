var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Liste des réservations'
  });
});

router.put('/', (req, res) => {
  res.json({
    message: 'Réservations enregistrées'
  });
});

module.exports = router;