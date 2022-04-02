import React, { useState, useEffect } from "react";
import "./register.style.css";
import Field from "../filed/field.component";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/auth/authSlice";
import MessageModal from "../messageModal/messageModal.component";

function RegisterUser({ handleToggleFormClick }) {
	//INPUT STATES
	const [firstName, setFirstName] = useState("");
	const [userName, setUserName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showModal, setShowModal] = useState(false);

	//DISPATCH
	const dispatch = useDispatch();

	//INPUT HANDLER
	function handleUserName(e) {
		setUserName(e.target.value);
	}
	function handleFirstName(e) {
		setFirstName(e.target.value);
	}
	function handleLastName(e) {
		setLastName(e.target.value);
	}
	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}
	function handleChangePassword(e) {
		setPassword(e.target.value);
	}
	function handleConfirmPassword(e) {
		setConfirmPassword(e.target.value);
	}

	//SUBMIT HANLDER
	function handleSubmit(event) {
		event.preventDefault();
		// if (
		// 	!password.length ||
		// 	!firstName.length ||
		// 	!userName.length ||
		// 	!email.length ||
		// 	!password.length
		// )
		// 	return;
		if (password !== confirmPassword) return;
		// console.log(userName, firstName, lastName, email, password);
		dispatch(register({ userName, firstName, lastName, email, password }));
	}

	//SELECTOR
	const registerStatus = useSelector((state) => state.registerStatus);

	function renderModal() {
		return (
			<MessageModal
				style={`${registerStatus !== "idle" ? registerStatus : ""}`}
			/>
		);
	}

	useEffect(() => {
		if (registerStatus === "idle") return;
		setShowModal(true);
		setTimeout(() => {
			setShowModal(false);
		}, 4000);
	}, [registerStatus]);

	return (
		<>
			{showModal && renderModal()}
			<form className="field-group" onSubmit={handleSubmit}>
				<h1 className="field-heading">Register</h1>
				<p className="field-msg">
					Already a member?{" "}
					<span className="link" onClick={handleToggleFormClick}>
						Log In
					</span>
				</p>

				<Field
					className="field"
					value={firstName}
					handleChange={handleFirstName}
					type="text"
					label="First Name"
				/>
				<Field
					className="field"
					value={lastName}
					handleChange={handleLastName}
					type="text"
					label="Last Name"
				/>
				<Field
					className="field"
					value={userName}
					handleChange={handleUserName}
					type="text"
					label="User Name"
				/>
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
				<Field
					value={confirmPassword}
					handleChange={handleConfirmPassword}
					className="field"
					type="password"
					label="Confirm Password"
				/>
				<button className="login-btn">Register</button>
			</form>
		</>
	);
}

export default RegisterUser;
