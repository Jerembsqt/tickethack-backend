const mongoose = require('mongoose');

const bookingsSchema = mongoose.Schema({
    trip: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trips',
        required: true
    }
});

const Booking = mongoose.model('bookings', bookingsSchema);

module.exports = Booking;