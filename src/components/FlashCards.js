import React from "react";
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
	const [type, setType] = React.useState("review");
 	const [score, setScore] = React.useState(0);
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [didAnswer, setDidAnswer] = React.useState(false);
	const [selectedAnswer, setSelectedAnswer] = React.useState(0);

	const styleSelectedCorrect = {
		border: "4px solid #eee",
		backgroundColor: "transparent"
	}
	const styleSelected = {
		border: "2px solid #444",
	}
	const styleAnswer = {
		border: "4px solid #eee",
		backgroundColor: "transparent"
	}

	React.useEffect(() => {
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
			setSelectedAnswer(answeredIndex);

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
				<p>{type}</p>
				<p>score: {score}</p>
				<p>TIME: 00:00:00</p>
			</div>
			<div className="flash-card-main-content">
				<div className="flash-card-question">
					{currentQuestion.question}
				</div>
				<ul className="choices">
					{currentQuestion.choices.slice(0, 4).map((choice, index) => (
						didAnswer && index === selectedAnswer && index === currentQuestion.answer ?
							<li key={index} onClick={() => handleAnswerClick(index)} style={styleSelectedCorrect}>
								{choice}
							</li>
						: didAnswer && index === selectedAnswer ?
							<li key={index} onClick={() => handleAnswerClick(index)} style={styleSelected}>
								{choice}
							</li>
						:	didAnswer && index === currentQuestion.answer ?
							<li key={index} onClick={() => handleAnswerClick(index)} style={styleAnswer}>
								{choice}
							</li>
						: 	<li key={index} onClick={() => handleAnswerClick(index)}>
								{choice}
							</li>
					))}
				</ul>
			</div>
			<div className="question-finished-box">
				{didAnswer && 
					<div 
						onClick={handleNextQuestion}
						className="question-finished-box-button">
						Next
					</div>
				}
			</div>
		</div>
	)
}