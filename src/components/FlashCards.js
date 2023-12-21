import React from "react";
import Choices from "./Choices";
import '../index.css';
import quizData from "./quizData";

export default function FlashCards(props){
	
	const [score, setScore] = React.useState(0);
	const [flashCardsData, setFlashCardsData] = React.useState(quizData);
	// const [questionData, setQuestionData] = React.useState({});

	let didAnswer = false;

	return(
		<div className="flash-cards-container">
			<div className="flash-card-question">{flashCardsData[0].question}</div>
			<div className="flash-card-score">{score}</div>
			<Choices choices={flashCardsData[0].choices} answer={flashCardsData[0].answer}/>
			
			{didAnswer && 
				<div className="question-finished-box">
					<div className="question-finished-box-button">Next</div>
				</div>
			}
		</div>
	)
}