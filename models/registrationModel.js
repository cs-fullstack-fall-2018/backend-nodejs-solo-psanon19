const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const starShipSchema = new Schema({
    Ship: String,
    Captain : String,
    SerialNumber: Number
});

const Registration = mongoose.model('registration', starShipSchema);


module.exports = Registration;