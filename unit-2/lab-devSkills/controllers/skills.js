const mySkills = require("../models/skill");

function add(req, res, next) {
	res.render("./skills/add");
}

function addNew(req, res, next) {
	mySkills.create(req.body.name, req.body.grade);
	res.redirect("/skills");
}

function index(req, res, next) {
	res.render("./skills/index", {
		skills: mySkills.getAll(),
	});
}

function show(req, res, next) {
	var mySkill = mySkills.getOne(req.params.skillName);
	res.render("./skills/show", {
		skill: mySkill,
	});
}

function deleteOne(req, res, next) {
	console.log(req.params);
	mySkills.deleteOne(req.params.skillName);
	res.redirect("/skills");
	return;
}

module.exports = {
	add: add,
	index: index,
	addNew: addNew,
	show: show,
	deleteOne: deleteOne,
};
