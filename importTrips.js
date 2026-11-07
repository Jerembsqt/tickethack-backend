require('dotenv').config();
require('./models/connection');

const Trip = require('./models/trips');
const trips = require('./trips.json');

const formattedTrips = trips.map(trip => {
    return {
        departure: trip.departure,
        arrival: trip.arrival,
        date: trip.date.$date,
        price: trip.price
    };
});

Trip.insertMany(formattedTrips).then(() => {
    console.log('Les trajets ont été importés !');
    process.exit();
});