"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("BookingSeats", {
      fields: ["booking_code"],
      type: "foreign key",
      name: "fk-to-BookingSeats-booking_code",
      references: {
        table: "Bookings",
        field: "code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("BookingSeats", {
      fields: ["seat_id"],
      type: "foreign key",
      name: "fk-to-BookingSeats-seat_id",
      references: {
        table: "Seats",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "BookingSeats",
      "fk-to-BookingSeats-booking_code"
    );
    await queryInterface.removeConstraint(
      "BookingSeats",
      "fk-to-BookingSeats-seat_id"
    );
  },
};
