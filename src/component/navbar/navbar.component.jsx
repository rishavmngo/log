import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useNavigate } from "react-router";
import "./navbar.style.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout } from "../../store/auth/authSlice";
export default function Navbar() {
	const [showUserDetails, setShowUserDetails] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	function handleLogout() {
		localStorage.removeItem("token");
		dispatch(logout());
	}
	function handleUserDetails() {}

	return (
		<header className="navbar">
			<Logo className="logo" />
			<nav>
				<div className="search-box">
					<input
						type="input"
						placeholder="Search..."
						class="search-box--input"
					></input>
					<FaSistrix class="search-box--search" />
				</div>
				<div className="acc">
					{Object.keys(user).length > 0 ? (
						<div className="user">
							<span
								onClick={() =>
									setShowUserDetails(!showUserDetails)
								}
							>
								{user.username}
							</span>
							{showUserDetails && (
								<div className="user--details">
									<span
										className="acc--logout"
										onClick={handleLogout}
									>
										Logout
									</span>
								</div>
							)}
						</div>
					) : (
						<>
							<Link to="/auth/login" className="acc--login">
								Log in
							</Link>

							<Link to="/auth/register" className="acc--create">
								Create account
							</Link>
						</>
					)}
				</div>
			</nav>
		</header>
	);
}
