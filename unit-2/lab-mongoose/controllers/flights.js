const mongoose = require("mongoose");
const Flight = require("../models/flight");
const Destination = require("../models/destination");

function add(req, res, next) {
	res.render("add", {
		title: "Add Flights",
	});
	return;
}

async function show(req, res, next) {
	try {
		const query = Flight.find().lean();

		const flights = await query.exec((err, flightsDoc) => {
			res.render("index", {
				title: "Tracking Flights",
				flights: flightsDoc,
			});
		});
	} catch (err) {
		handleError(err);
	}

	return;
}

function newFlight(req, res, next) {
	var flightArgs = req.body;

	if (flightArgs.departs == "") {
		delete flightArgs.departs;
	}

	const flight = new Flight(flightArgs);

	flight.save((err) => {
		if (err) return handleError(err);
	});
	res.redirect("/");
}

async function showFlight(req, res, next) {
	try {
		const query = Flight.find({ flightNo: req.params.flightNo })
			.populate("destination")
			.lean();
		const retFlight = await query.exec((err, flightDoc) => {
			res.render("flight", {
				title: "Tracking Flights",
				flight: flightDoc[0],
			});
		});
	} catch (err) {
		handleError(err);
	}
	return;
}

async function addDestination(req, res, next) {
	var flightNo = req.params.flightNo;
	var flightDestination = new Destination(req.body);
	await flightDestination.save();
	console.log(flightDestination);

	var flightDoc = await Flight.find({ flightNo: flightNo });
	flightDoc[0].destination.push(flightDestination);

	await flightDoc[0].save();

	res.redirect("/show/" + req.params.flightNo);
}

module.exports = {
	add,
	show,
	new: newFlight,
	showFlight,
	addDestination,
};
