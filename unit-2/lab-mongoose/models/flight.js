const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
	airline: {
		type: String,
		enum: ["American", "Southwest", "United"],
	},
	airport: {
		type: String,
		enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
		default: "DEN",
	},
	flightNo: {
		type: Number,
		min: 10,
		max: 9999,
	},
	departs: {
		type: Date,
		default: function () {
			var today = new Date();
			var defaultDate = today.setDate(today.getDate() + 365);
			console.log(defaultDate);
			return defaultDate;
		},
	},
	destination: [{ type: mongoose.Schema.Types.ObjectId, ref: "destination" }],
});

module.exports = mongoose.model("Flight", flightSchema);
