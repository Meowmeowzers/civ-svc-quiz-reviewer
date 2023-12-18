import React from "react";
import { Link } from "react-router-dom";

export default function Home(){

	return(
		<div>
			<div className="home-section">
				Home Page
				<Link to="/flashcards">Start</Link>
			</div>
			<div className="about-section">
				About
			</div>
		</div>
	)
}