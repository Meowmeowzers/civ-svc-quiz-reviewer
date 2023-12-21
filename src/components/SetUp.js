import React from "react";

export default function SetUp(props){
	
	function handleChange(){

	}
	
	return(
		<div className="setup-container">
		<div className="setup-quiz">
				<h1>Select Categories</h1>
				<label htmlFor="checkbox1">
					<input id="checkbox1" name="" type="checkbox" value={props.data.numericalType} onChange={handleChange} />
					Numerical Ability
				</label>
				<label htmlFor="checkbox2">
					<input id="checkbox2" name="" type="checkbox" value={""} onChange={handleChange} />
					Verbal Ability
				</label>
				<label>
					<input id="" name="" type="checkbox" value={""} onChange={handleChange} />
					Clerical Ability
				</label>
				<label>
					<input id="" name="" type="checkbox" value={""} onChange={handleChange} />
					Analytical Ability
				</label>
				<label>
					<input id="" name="" type="checkbox" value={""} onChange={handleChange} />
					The Philippine Constitution
				</label>
				<label>
					<input id="" name="" type="checkbox" value={""} onChange={handleChange} />
					Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)
				</label>
				<label>
					<input id="" name="" type="checkbox" value={""} onChange={handleChange} />
					Peace and Human Rights Issues and Concepts
				</label>
				<label>
					<input id="" name="" type="checkbox" value={""} onChange={handleChange} />
					Environment Management and Protection
				</label>
		</div>
		<div className="setup-quiz-type">
			<button>Start</button>
			<input type="range" max={100} min={10}/>
			<label>Number of Questions</label>
			<button>Start</button>
		</div>
		</div>
	)
}