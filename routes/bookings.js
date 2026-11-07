var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');
const Trip = require('../models/trips');
const Cart = require('../models/cart');

router.get('/', (req, res) => {
    Booking.find().then(data => {
        let bookings = [];
        let i = 0;

        function getTrips() {
            if (i < data.length) {
                Trip.findById(data[i].trip).then(trip => {
                    bookings.push(trip);
                    i++;
                    getTrips();
                });
            } else {
                res.json({ bookings: bookings });
            }
        }

        getTrips();
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