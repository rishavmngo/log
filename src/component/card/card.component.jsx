import React, { useState } from "react";
import LoginUser from "../login/login.component";
import RegisterUser from "../register/register.component";
import "./card.style.css";
import art from "../../assets/illustration/2.jpg";

function Card() {
	const location = window.location.href.split("/")[4];
	const [toggleForm, setToggleForm] = useState(
		location === "register" ? false : true
	);

	function handleToggleFormClick() {
		setToggleForm(!toggleForm);
	}

	return (
		<div className="card">
			<div className="art">
				<div className="art-fg">
					<h1 className="art-logo">LOG.</h1>
					{/* <p className="sub-text">Log your journey</p> */}
				</div>
				<img className="art-pic" src={art} alt="" />
			</div>
			<div className="form">
				<h1 className="art-logo-optional">LOG.</h1>
				{/* <LoginUser /> */}
				{toggleForm ? (
					<LoginUser handleToggleFormClick={handleToggleFormClick} />
				) : (
					<RegisterUser
						handleToggleFormClick={handleToggleFormClick}
					/>
				)}
				<div className="buttons"></div>
			</div>
		</div>
	);
}

export default Card;
