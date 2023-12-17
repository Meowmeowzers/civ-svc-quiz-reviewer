import React from "react";
import '../index.css';

export default function Choices(props){

	const [choicesData, setChoicesData] = React.useState(["", "", "", ""]);

	return(
		<ul className="choices">
			<li>Choice 1</li>
			<li>Choice 2</li>
			<li>Choice 3</li>
			<li>Choice 4</li>
		</ul>
	)
}