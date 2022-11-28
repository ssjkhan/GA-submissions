import React from "react";
import SkillItem from "./SkillListItem";

class SkillList extends React.Component {
	render() {
		const listItems = this.props.skillsList.map((el) => {
			return (
				<SkillItem
					name={el.name}
					level={el.level}
				></SkillItem>
			);
		});
		return (
			<table>
				<tbody>
					<tr>
						<th>Skill</th>
						<th>Level</th>
					</tr>
					{listItems}
				</tbody>
			</table>
		);
	}
}

export default SkillList;
