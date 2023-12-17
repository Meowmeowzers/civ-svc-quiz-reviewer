import React from "react";
import Choices from "./Choices";
import '../index.css';

export default function FlashCards(props){
	
	const [score, setScore] = React.useState(0);
	const [flashCardsData, setFlashCardsData] = React.useState([{}]);
	const [questionData, setQuestionData] = React.useState({});
	let didAnswer = false;

	return(
		<div className="flash-cards-container">
			<div className="flash-card-question">Insert very long question here</div>
			<div className="flash-card-score">{score}</div>
			<Choices />
			
			{didAnswer && 
				<div className="question-finished-box">
					<div className="question-finished-box-button">Next</div>
				</div>
			}
		</div>
	)
}