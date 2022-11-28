import React from "react";

class SkillListItem extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.level}</td>
			</tr>
		);
	}
}

export default SkillListItem;
