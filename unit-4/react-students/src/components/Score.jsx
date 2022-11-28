import React from "react";

const Score = (props) => {
	return (
		<tr>
			<td>{props.date}</td>
			<td>{props.score}</td>
		</tr>
	);
};

export default Score;
