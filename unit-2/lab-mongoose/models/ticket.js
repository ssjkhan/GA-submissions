const mongoose = require("mongoose");
const FlightSchema = require("./flight");

const ticketSchema = new mongoose.Schema({
	seat: {
		type: String,
		match: /[A-F][1-9]\d?/,
	},
	price: Number,
	flight: [{ type: mongoose.Schema.Types.ObjectId, ref: "Flight" }],
});
