import React from "react";
import '../index.css';

export default function Choices(props) {

	const [choicesData, setChoicesData] = React.useState(props.choices);
	// const correctAnswerSlot = Math.floor(Math.random() * 4);
	
	// function setChoices(){
	// }
	
	// function randomize(array){
	// 	let arr = array;
	// 	for (let i = arr.length - 1; i > 0; i--) { 
	// 		const j = Math.floor(Math.random() * (i + 1)); 
	// 		[arr[i], arr[j]] = [arr[j], arr[i]]; 
	// 	}
	// 	return arr;
	// }
	
	return (
		<ul className="choices">
			<li>{choicesData[0]}</li>
			<li>{choicesData[1]}</li>
			<li>{choicesData[2]}</li>
			<li>{choicesData[3]}</li>
		</ul>
	)
}