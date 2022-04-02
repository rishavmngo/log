import React, { useState, useEffect } from "react";
import Field from "../filed/field.component";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import "./login.style.css";

function LoginUser({ handleToggleFormClick }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const userLoggedIn = useSelector((state) => state.loggedIn);
	let navigate = useNavigate();

	//INPUT HANDLER
	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}
	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	if (userLoggedIn) {
		navigate("/");
	}
	function handleSubmit(event) {
		event.preventDefault();
		console.log(login);
		dispatch(login({ email, password }));
	}

	return (
		<form className="field-group" onSubmit={handleSubmit}>
			<h1 className="field-heading">Log In</h1>
			<p className="field-msg">
				Not a member?{" "}
				<span onClick={handleToggleFormClick} className="link">
					Register
				</span>
			</p>
			<Field
				className="field"
				value={email}
				handleChange={handleChangeEmail}
				type="email"
				label="Email"
			/>
			<Field
				value={password}
				handleChange={handleChangePassword}
				className="field"
				type="password"
				label="Password"
			/>
			<button className="login-btn">Login</button>
		</form>
	);
}

export default LoginUser;
