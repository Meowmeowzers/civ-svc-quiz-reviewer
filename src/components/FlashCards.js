import React, { useEffect } from "react";
import '../index.css';
import { SelectedItemsContext } from "../App";

export default function FlashCards(){
	
	const [flashCardsData, /*setFlashCardsData*/] = React.useContext(SelectedItemsContext);
	const [currentQuestion, setCurrentQuestion] = React.useState({
		question: "",
		answer: "",
		choices: [
			"","","",""
		]
	});
	const [score, setScore] = React.useState(0);
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [didAnswer, setDidAnswer] = React.useState(false);

	useEffect(() => {
		setCurrentQuestionData(flashCardsData[currentIndex].choices);
	}, []);

	function setCurrentQuestionData(choicesArray){
		const randomAnswerIndex = Math.floor(Math.random() * 4);
		const newChoices = [...choicesArray];
		
		for (let i = newChoices.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newChoices[i], newChoices[j]] = [newChoices[j], newChoices[i]];
		}
		
		newChoices[randomAnswerIndex] = flashCardsData[currentIndex].answer;

		setCurrentQuestion(() => {
			return {
				question: flashCardsData[currentIndex].question,
				answer: randomAnswerIndex,
				choices : newChoices
			}
		});
		return newChoices;
	}

	function handleAnswerClick(answeredIndex){
		if(!didAnswer){
			setDidAnswer(true);
			
			if(answeredIndex === currentQuestion.answer)
				setScore(prev => prev + 1);
			
			setCurrentIndex(prev => {
				if(prev + 1 >= flashCardsData.length)
					return 0;
				else
					return prev + 1;
			});	
		}
	}

	function handleNextQuestion(){
		setDidAnswer(false);
		setCurrentQuestionData(flashCardsData[currentIndex].choices);
	}

	return(
		<div className="flash-cards-container">
			<div className="flash-card-score">
				<p>score: {score}</p>
			</div>
			<div className="flash-card-main-content">
				<div className="flash-card-question">
					{currentQuestion.question}
				</div>
				<ul className="choices">
					<li onClick={() => handleAnswerClick(0)}>{currentQuestion.choices[0]}</li>
					<li onClick={() => handleAnswerClick(1)}>{currentQuestion.choices[1]}</li>
					<li onClick={() => handleAnswerClick(2)}>{currentQuestion.choices[2]}</li>
					<li onClick={() => handleAnswerClick(3)}>{currentQuestion.choices[3]}</li>
				</ul>
			</div>
			{didAnswer && 
				<div className="question-finished-box">
					<div 
						onClick={handleNextQuestion}
						className="question-finished-box-button">
						Next
					</div>
				</div>
			}
		</div>
	)
}