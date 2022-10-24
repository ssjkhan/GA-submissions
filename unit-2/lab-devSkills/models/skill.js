const mySkills = [
	{ name: "Javascript", grade: "C", id: 1 },
	{ name: "Python", grade: "D", id: 2 },
	{ name: "TypeScript", grade: "D", id: 3 },
	{ name: "Java", grade: "C", id: 4 },
];

var counter = 5;

function create(newName, newGrade) {
	mySkills.push({
		name: newName,
		grade: newGrade,
		id: counter++,
	});
}

function getOne(name) {
	return mySkills.find((skill) => skill.name === name);
}

function deleteOne(name) {
	var index = mySkills.find((skill) => skill.name === name);
	mySkills.splice(index, 1);
	return;
}

module.exports = {
	getAll: function () {
		return mySkills;
	},
	create: create,
	getOne: getOne,
	deleteOne: deleteOne,
};
