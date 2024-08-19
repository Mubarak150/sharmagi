const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const Booking = sequelize.define('Booking', {
  from_location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  to_location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  booking_datetime: {
    type: Sequelize.DATE, // Combined date and time
    allowNull: false
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


module.exports = Booking;