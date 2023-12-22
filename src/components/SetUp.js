import React from "react";

export default function SetUp(props){
	return(
		<div className="setup-container">
		<div className="setup-quiz">
				<h1>Select Categories</h1>
				<label htmlFor="numericalType">
					<input 
						id="numericalType"
						name="numericalType" 
						type="checkbox" 
						checked={props.data.numericalType} 
						onChange={props.handleChange} 
					/>
					Numerical Ability
				</label>
				<label htmlFor="verbalType">
					<input 
						id="verbalType"
						name="verbalType" 
						type="checkbox" 
						checked={props.data.verbalType} 
						onChange={props.handleChange} 
					/>
					Verbal Ability
				</label>
				<label>
					<input 
						id="clericalType"
						name="clericalType" 
						type="checkbox" 
						checked={props.data.clericalType} 
						onChange={props.handleChange} 
					/>
					Clerical Ability
				</label>
				<label>
					<input 
						id="analyticalType"
						name="analyticalType" 
						type="checkbox" 
						checked={props.data.analyticalType} 
						onChange={props.handleChange} 
					/>
					Analytical Ability
				</label>
				<label>
					<input 
						id="phConstitution"
						name="phConstitution" 
						type="checkbox" 
						checked={props.data.phConstitution} 
						onChange={props.handleChange} 
					/>
					The Philippine Constitution
				</label>
				<label>
					<input 
						id="conductEthics"
						name="conductEthics" 
						type="checkbox" 
						checked={props.data.conductEthics} 
						onChange={props.handleChange} 
					/>
					Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)
				</label>
				<label>
					<input 
						id="rights"
						name="rights" 
						type="checkbox" 
						checked={props.data.rights} 
						onChange={props.handleChange} 
					/>
					Peace and Human Rights Issues and Concepts
				</label>
				<label>
					<input 
						id="environment"
						name="environment" 
						type="checkbox" 
						checked={props.data.environment} 
						onChange={props.handleChange} 
					/>
					Environment Management and Protection
				</label>
		</div>
		<div className="setup-quiz-type">
			<button>Start</button>
			<input 
				id="numberOfItems" 
				name="numberOfItems" 
				type="range" 
				max={100} 
				min={0} 
				step={10}
				value={props.data.numberOfItems}
				onChange={props.handleChange}
			/>
			<label>Number of Questions</label>
			<p>{props.data.numberOfItems}</p>
			<button onClick={props.handleStartEndless}>Start</button>
		</div>
		</div>
	)
}