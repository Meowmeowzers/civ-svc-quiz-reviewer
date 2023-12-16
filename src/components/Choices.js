import React from "react";

export default function Choices(props){

	const [choicesData, setChoicesData] = React.useState(["", "", "", ""]);

	return(
		<>
			<ul>
				<li>Choice</li>
				<li>Choice</li>
				<li>Choice</li>
				<li>Choice</li>
			</ul>
		</>
	)
}