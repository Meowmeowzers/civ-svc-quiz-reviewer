import React from "react";

export default function FlashCards(props){
	
	const [score, setScore] = React.useState(0);
	const [flashCardsData, setFlashCardsData] = React.useState([{}]);
	const [questionData, setQuestionData] = React.useState({});
	let didAnswer = false;

	return(
		<>
			<div>{score}</div>
			<div>Question</div>
			<div>
				<div>Choice</div>
				<div>Choice</div>
				<div>Choice</div>
				<div>Choice</div>
			</div>
			<div>
				{didAnswer && <div>Next</div> }
			</div>
		</>
	)
}