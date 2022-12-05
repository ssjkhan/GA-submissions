import React from "react";
import SkillList from "./components/SkillList";
import NewSkillForm from "./components/NewSkillForm";
import Header from "./components/Header";
import "./styles/style.css";

const InitialList = [
	{ name: "Python", level: "2" },
	{ name: "Javascript", level: "2" },
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.updateSkills = this.updateSkills.bind(this);
		this.skillsList = InitialList;
	}

	updateSkills(skill, level) {
		this.setState({
			skillsList: this.skillsList.push({ name: skill, level: level }),
		});
	}

	render() {
		return (
			<div className="App">
				<Header></Header>
				<SkillList skillsList={this.skillsList}></SkillList>
				<hr></hr>
				<NewSkillForm updateSkills={this.updateSkills}></NewSkillForm>
			</div>
		);
	}
}

export default App;
