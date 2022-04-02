import React from "react";
import "./homepage.style.css";
import Navbar from "../../component/navbar/navbar.component";
import Sidebar from "../../component/sidebar/sidebar.component";
import Feed from "../../component/feed/feed.component";

export default function Homepage() {
	return (
		<div className="homepage">
			<Navbar />
			<Sidebar />
			<Feed />
		</div>
	);
}
