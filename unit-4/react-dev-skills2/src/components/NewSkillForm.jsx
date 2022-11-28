import React from "react";

class NewSkillForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let form = event.target.elements;
		let name = form.name.value;
		let level = form.level.value;

		this.props.updateSkills(name, level);
	}

	render() {
		const form = (
			<form onSubmit={this.handleSubmit}>
				<label>
					Skill:
					<input
						type="text"
						name="name"
					></input>
				</label>
				<label>
					Skill Level
					<select name="level">
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
					</select>
				</label>
				<input
					type="submit"
					value="Add Skill"
				></input>
			</form>
		);
		return form;
	}
}
export default NewSkillForm;
