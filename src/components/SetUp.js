import React from "react";

export default function SetUp(props){
	return(
		<div className="setup-section">
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
								id="general"
								name="general" 
								type="checkbox" 
								checked={props.data.general} 
								onChange={props.handleChange} 
							/>
							General Information
						</label>
				</div>
				<div className="setup-quiz-type">
					<button className="setup-quiz-start-button" onClick={props.handleStartReview}>Start</button>			
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
					{/* <label>Number of Questions</label> */}
					{props.data.numberOfItems < 10 ? <p>Review Mode</p> : <p>{`${props.data.numberOfItems} items`}</p>}
				</div>
			
		</div>
	)
}