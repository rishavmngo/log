import react from "react";
import "./app.css"
import Homepage from "./pages/homepage/homepage.component";
import Navbar from "./component/navbar/navbar.component";

export default function App() {
	return (
		<>
			<Navbar />
			<Homepage />
		</>
	)
}