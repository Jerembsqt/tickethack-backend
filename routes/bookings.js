var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');
const Cart = require('../models/cart');
router.get('/', (req, res) => {
    Booking.find().then(data => {
        res.json({ bookings: data });
    });
});

router.put('/', (req, res) => {
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

                Cart.deleteMany({}).then((result) => {
    
                    res.json({ message: 'Réservations enregistrées' });
                });
            }
        }

        saveBooking();
    });
});

module.exports = router;