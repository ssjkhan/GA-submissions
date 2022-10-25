const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
	airport: {
		type: String,
		enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
	},
	arrival: Date,
});

module.exports = mongoose.model("destination", destinationSchema);
