import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Booking = db.define("bookings", {
  booking_id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ticketNumber: {
    type: DataTypes.STRING,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  from: {
    type: DataTypes.STRING,
  },
  to: {
    type: DataTypes.STRING,
  },
  date_time: {
    type: DataTypes.DATEONLY,
  },
  departure: {
    type: DataTypes.TIME,
  },
  arrival: {
    type: DataTypes.TIME,
  },
  price: {
    type: DataTypes.STRING,
  },
  total_passanger: {
    type: DataTypes.STRING,
  },
});


export default Booking;