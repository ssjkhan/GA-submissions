import React, { useState } from "react";
import Score from "./Score";

const initalStudent = {
	name: "Cait Yomorta",
	bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum",
	scores: [
		{
			date: "2018-02-08",
			score: 77,
		},
		{
			date: "2018-04-22",
			score: 92,
		},
		{
			date: "2018-09-15",
			score: 68,
		},
	],
};

const Student = (props) => {
	const [student, setStudent] = React.useState(props);

	let scores = student.scores.map((score) => {
		return <Score {...score}></Score>;
	});

	return (
		<tr className="student-container">
			<td>{props.name}</td>
			<td>{props.bio}</td>
			<td>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Score</th>
						</tr>
					</thead>
					<tbody>{scores}</tbody>
				</table>
			</td>
		</tr>
	);
};

export default Student;
