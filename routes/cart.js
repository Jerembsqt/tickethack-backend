var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');
const Cart = require('../models/cart');
const Booking = require('../models/bookings');

// Afficher le panier avec les informations des trajets
router.get('/', (req, res) => {
    Cart.find().then(data => {
        let cart = [];
        let i = 0;

        function getTrips() {
            if (i < data.length) {
                Trip.findById(data[i].trip).then(trip => {
                    cart.push({
                        _id: data[i]._id,
                        trip: trip
                    });
                    i++;
                    getTrips();
                });
            } else {
                res.json({ cart: cart });
            }
        }

        getTrips();
    });
});

// Ajouter un trajet au panier
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

// Supprimer un trajet du panier
router.delete('/:cartId', (req, res) => {
    Cart.deleteOne({ _id: req.params.cartId }).then(() => {
        res.json({ message: 'Trajet supprimé du panier' });
    });
});

// Payer les trajets du panier
router.post('/purchase', (req, res) => {
    Cart.find().then(data => {
        let i = 0;

        function saveBooking() {
            if (i < data.length) {
                const newBooking = new Booking({
                    trip: data[i].trip
                });

                newBooking.save().then(() => {
                    i++;
                    saveBooking();
                });
            } else {
                Cart.deleteMany({}).then(() => {
                    res.json({ result: true });
                });
            }
        }

        saveBooking();
    });
});

module.exports = router;