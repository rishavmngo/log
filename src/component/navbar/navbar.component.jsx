import React, { useRef, useEffect, useState, createRef } from "react";
import { FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo_Dark from "../../assets/logo_dark.png";
import Logo_Light from "../../assets/logo.png";
import { useNavigate } from "react-router";
import "./navbar.style.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout } from "../../store/auth/authSlice";
import UserMenu from "../userMenu/userMenu.component";
import ThemeButton from "../themeButton/themebutton/themeButton.component";
export default function Navbar() {
	const [showUserDetails, setShowUserDetails] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.userInfo);
	const darkThemeOn = useSelector((state) => state.preference.darkThemeOn);

	function handleUserDetails(e) {
		setShowUserDetails(!showUserDetails);
	}
	function goToHomepage() {
		navigate("/");
	}

	// useEffect(() => {
	// 	document.addEventListener("click", () => {
	// 		setShowUserDetails(false);
	// 	});
	// });

	return (
		<header className="navbar">
			{/* <Logo className="logo" onClick={goToHomepage} /> */}
			<img
				src={darkThemeOn ? Logo_Dark : Logo_Light}
				className="logo"
				alt="logo"
				onClick={goToHomepage}
			/>
			<nav>
				<div className="search-box">
					<input
						type="input"
						placeholder="Search..."
						class="search-box--input"
					></input>
					<FaSistrix class="search-box--search" />
				</div>
				<ThemeButton className="theme-btn" />
				<div className="acc">
					{Object.keys(user).length > 0 ? (
						<div className="user">
							<span
								onClick={(e) => handleUserDetails(e)}
								className="user--name"
							>
								{user.firstname} {user.lastname}
							</span>
							{showUserDetails && <UserMenu />}
						</div>
					) : (
						<div className="auth-btns">
							<Link to="/auth/login" className="acc--login">
								Log in
							</Link>

							<Link to="/auth/register" className="acc--create">
								Create account
							</Link>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
}
