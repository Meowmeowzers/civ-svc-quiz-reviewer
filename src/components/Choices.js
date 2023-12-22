import React from "react";
import '../index.css';

export default function Choices(props) {

	return (
		<ul className="choices">
			<li onClick={() => props.onClick(0)}>{props.question.choices[0]}</li>
			<li onClick={() => props.onClick(1)}>{props.question.choices[1]}</li>
			<li onClick={() => props.onClick(2)}>{props.question.choices[2]}</li>
			<li onClick={() => props.onClick(3)}>{props.question.choices[3]}</li>
		</ul>
	)
}