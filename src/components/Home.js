import React from "react";
import SetUp from "./SetUp";
// import { Link } from "react-router-dom";

export default function Home(){

	const [isSetUp, setIsSetUp] = React.useState(false);

	const [quizTypes, setQuizTypes] = React.useState({
		numericalType: true,
		verbalType: false,
		clericalType: false,
		analyticalType: false,
		phConstitution: false,
		conductEthics: false,
		rights: false,
		environment: false,
		numberOfItems: 10
	})

	// function handleClickStart(){
	// 	setIsSetUp(() => !isSetUp);
	// }

	return(
		<div>
			<div className="home-section">
				{!isSetUp &&
					<>
						<div className="home-title">Home Page</div>
						<div className="home-start-button" onClick={() => setIsSetUp(() => !isSetUp)}>Start</div>
					</>
				}
				{/* <Link to="/flashcards">Start</Link> */}
				{isSetUp && <SetUp data={quizTypes}/>}
			</div>

			<div className="about-section">
				<h1>What is the Civil Service Exam Philippines</h1>
				<p>The career service examination is the government’s way of screening and selecting prospective civil servants in the country. The Civil Service Commission (CSC) creates and administers this exam to determine which applicants are fit for a government job.</p>
				<h1>Types of Civil Service Exams in the Philippines</h1>
				
				<li>Professional</li>
				<li>Sub-Professional</li>
				
				<p>Passers of the exam for professional civil service level may be accepted for both clerical (first-level) and technical, executive, or managerial (second-level) positions in the government.
				On the other hand, passers of the exam for the sub-professional civil service level may be accepted only for first-level or clerical government positions.</p>

				<h1>Modes of Civil Service Exam</h1>
				<p>You can take the exam through the manual pen-and-paper test (PPT) or the computerized examination (COMEX).
				With the PPT, you take the test using a text booklet and an answer sheet. The COMEX, on the other hand, is conducted online.</p>

				<h1>Civil Service Examination Coverage</h1>
				<p>Civil service exams in the Philippines are similar to college entrance exams in scope. Given in English and Filipino, the examination covers the following subjects for both professional and sub-professional levels:</p>

				<h3>Numerical Ability</h3>
				<li>Basic operations</li>
				<li>Word problems</li>

				<h3>Verbal Ability</h3>
				<li>Grammar and correct usage</li>
				<li>Vocabulary</li>
				<li>Paragraph organization</li>
				<li>Reading comprehension</li>

				<p>The exam coverage also includes the following for the professional level: </p>

				<h3>Analytical Ability</h3>
				<li>Word association </li>
				<li>Identifying assumptions and conclusions</li>
				<li>Logic </li>
				<li>Data interpretation </li>

				<p>Meanwhile, the sub-professional level will also cover the following: </p>

				<h3>Clerical Ability</h3>
				<li>Filing</li>
				<li>Spelling</li>

				<p>The civil service exam also covers general information items such as the following: </p>

				<li>The Philippine Constitution </li>
				<li>Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)</li>
				<li>Peace and Human Rights Issues and Concepts </li>
				<li>Environment Management and Protection</li>
				
				<h1>Who Can Take the Civil Service Exam?</h1>
				<p>Curious to know who can take the civil service exam in the Philippines? This test is open to anyone who meets the following civil service exam eligibility requirements:</p>

				<li>Filipino citizen</li>
				<li>At least 18 years old during the filing of the application</li>
				<li>Of good moral character </li>
				<li>No conviction of an offense or crime</li>
				<li>No dismissal from military or government service</li>
				<li>Has never taken the same level of civil service within three months before the examination date</li>
				
				<p>Can undergraduates apply for the civil service exam? Yes. Since the CSC has no educational requirement for CSE applicants, a high school graduate or a college undergraduate can take the civil service exam.</p>

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

				<li>Professional-level examinees need to answer 170 items within 3 hours and 10 minutes, while sub-professional-level examinees have 2 hours and 40 minutes to answer a total of 165 items.</li>
				<li>Examinees should get a rating of at least 80 to pass. </li>

				<a href="#">Read More</a>
			</div>
		</div>
	)
}