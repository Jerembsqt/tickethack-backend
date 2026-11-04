var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Affichage du panier'
  });
});
router.post('/', (req, res) => {
  const { tripId } = req.body;

  res.json({
    message: 'Trajet ajouté au panier',
    tripId: tripId
  });
});

module.exports = router;