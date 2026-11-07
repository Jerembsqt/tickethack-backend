var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const Cart = require('../models/cart');

router.get('/', (req, res) => {
    Cart.find().then(data => {
    res.json({ trips: data });
});
});

router.post('/', (req, res) => {
    const { tripId } = req.body;

    Trip.findById(tripId).then(data => {
        if (data) {
            const newCart = new Cart({
    trip: data._id
});

newCart.save().then(() => {
    res.json({ message: 'Trajet ajouté au panier' });
});
        } else {
            res.json({ message: 'Trajet introuvable' });
        }
    });
});

module.exports = router;