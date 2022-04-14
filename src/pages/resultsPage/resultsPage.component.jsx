import React from "react";
import Navbar from "../../component/navbar/navbar.component";
import Sidebar from "../../component/sidebar/sidebar.component";
import ResultsComp from "../../component/results/results.component";
import "./resultsPage.style.css";

export default function ResultsPage() {
	return (
		<div className="resultsPage">
			<Navbar />
			<Sidebar />
			<ResultsComp />
		</div>
	);
}
