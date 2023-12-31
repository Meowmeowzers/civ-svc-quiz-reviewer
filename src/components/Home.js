import React from "react";
import SetUp from "./SetUp";
import { useNavigate } from "react-router-dom";
import { SelectedItemsContext } from "../App";
import dataAnalytical from "./data/analyticalQuiz"
import dataClerical from "./data/clericalQuiz"
import dataNumerical from "./data/numQuiz"
import dataVerbal from "./data/verbalQuiz"
import dataGeneral from "./data/genQuiz"

export default function Home(){
	
	const [/*selectedQuizItems*/, setSelectedQuizItems] = React.useContext(SelectedItemsContext);
	const [isSetUp, setIsSetUp] = React.useState(false);
	const [quizTypes, setQuizTypes] = React.useState({
		numericalType: true,
		verbalType: false,
		clericalType: false,
		analyticalType: false,
		general: false,
		numberOfItems: 0
	});

	const navigate = useNavigate();
	
	function handleChange(e){
		const {name, type, value, checked} = e.target

		setQuizTypes(prev => {
			return{
				...prev,
				[name]: type === "checkbox" ? checked: value
			}			
		});
	}

	function startReview(){
		setSelectedQuizItems(() => {			
			const selectedItems = [
				quizTypes.numericalType && dataNumerical,
				quizTypes.verbalType && dataVerbal,
				quizTypes.clericalType && dataClerical,
				quizTypes.analyticalType && dataAnalytical,
				quizTypes.general && dataGeneral
			  ].filter(Boolean).flat(); // flat is used to remove array nesting???

			shuffleArray(selectedItems);

			return selectedItems;
		});
		navigate("/review");
	}

	function shuffleArray(array) {
		//fisher yates algorithm
		let newArray = array;
		for (let i = newArray.length - 1; i > 0; i--) {
		  const j = Math.floor(Math.random() * (i + 1));
		  [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}
		return newArray;
	  }

	return(
		<div>
			<div className="home-section">
				{!isSetUp ?
					<>
						<div className="home-title"><p>My <span>CIVIL SERVICE</span></p>Exam Reviewer</div>
						<div className="home-start-button" onClick={() => setIsSetUp(() => !isSetUp)}>Click Here</div>
					</>
				:
					<SetUp 
						data={quizTypes}
						handleChange={handleChange}
						handleStartReview={startReview} 
					/>
				}
			</div>

			<div className="about-section">
				<div className="about-container">
					<h1>What is the Philippine Civil Service Exam</h1>
					<p>The civil service examination is the government’s way of screening and selecting prospective civil servants in the country. The Civil Service Commission (CSC) creates and administers this exam to determine which applicants are fit for a government job.</p>
					
					<h1>Types of Civil Service Exams</h1>
					<li>Professional</li>
					<li>Sub-Professional</li>
					
					<p>Passers of the exam for professional civil service level may be accepted for both clerical (first-level) and technical, executive, or managerial (second-level) positions in the government.	On the other hand, passers of the exam for the sub-professional civil service level may be accepted only for first-level or clerical government positions.</p>

					<h1>Modes of Civil Service Exam</h1>
					<p>You can take the exam through the manual pen-and-paper test (PPT) or the computerized examination (COMEX).
					With the PPT, you take the test using a text booklet and an answer sheet. The COMEX, on the other hand, is conducted online.</p>

					<h1>Civil Service Examination Coverage</h1>
					<p>Civil service exams in the Philippines are similar to college entrance exams in scope. Given in English and Filipino, the examination covers the following subjects for both professional and sub-professional levels:</p>

					<h3>General information</h3>
					<li>The Philippine Constitution </li>
					<li>Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)</li>
					<li>Peace and Human Rights Issues and Concepts </li>
					<li>Environment Management and Protection</li>

					<h3>Numerical Ability</h3>
					<li>Basic operations</li>
					<li>Word problems</li>

					<h3>Verbal Ability</h3>
					<li>Grammar and correct usage</li>
					<li>Vocabulary</li>
					<li>Paragraph organization</li>
					<li>Reading comprehension</li>
					
					<h3>Clerical Ability (Sub-professional)</h3>
					<li>Filing</li>
					<li>Spelling</li>

					<h3>Analytical Ability (Professional)</h3>
					<li>Word association </li>
					<li>Identifying assumptions and conclusions</li>
					<li>Logic </li>
					<li>Data interpretation </li>
					
					<h1>Who Can Take the Civil Service Exam?</h1>
					<p>This test is open to anyone who meets the following civil service exam eligibility requirements:</p>

					<li>Filipino citizen</li>
					<li>At least 18 years old during the filing of the application</li>
					<li>Of good moral character </li>
					<li>No conviction of an offense or crime</li>
					<li>No dismissal from military or government service</li>
					<li>Has never taken the same level of civil service within three months before the examination date</li>
					<li>A high school graduate or a college undergraduate can take the civil service exam.</li>

					<h1>Who is Exempted from Taking the Exam?</h1>
					<p>Not all Filipinos who want to work in the government must take the civil service exam. The CSC grants exemption to the following individuals who are already considered eligible for civil service:</p>

					<li>Bar exam passers</li>
					<li>Board exam passers</li>
					<li>Honor graduates (summa cum laude, magna cum laude, or cum laude)</li>
					<li>Barangay health workers</li>
					<li>Barangay officials</li>
					<li>Sanggunian members</li>
					<li>Barangay nutrition scholars</li>
					<li>Electronic Data Processing Specialist eligibles</li>
					<li>Scientific and Technological Specialist eligibles </li>
					<li>Veteran Preference Rating eligibles</li>
					
					<p>Those who qualify for the exemption no longer need to take the civil service exam but must apply for a Certificate of Eligibility at a CSC Regional Office or Field Office.</p>
					
					<h1>The Exam</h1>
					<li>Professional-level examinees need to answer 170 items within 3 hours and 10 minutes</li>
					<li>Sub-professional-level examinees have 2 hours and 40 minutes to answer a total of 165 items.</li>
					<li>Examinees should get a rating of at least 80 to pass. </li>
					
					<a href="https://csc.gov.ph/phocadownload/userupload/erpo/announcements/2023/ExamAnnouncement05s2023_Conduct%20of%202024-0303%20CSE-PPT.pdf" target="__blank">Read More</a>
					
					<h1>Why this Website?</h1>
					<li>This simple project served as a learning activity for learning vanilla ReactJS.</li>				

					<h1>Disclaimer</h1>
					<li>Insert comment.</li>				

					<h1>Sources</h1>
					<li>------</li>
				</div>
			</div>
			<footer></footer>
		</div>
	)
}