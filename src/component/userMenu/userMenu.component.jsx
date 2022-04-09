import React from "react";
import "./userMenu.style.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import { FaCog } from "react-icons/fa";
import { useNavigate } from "react-router";
import { removeUser } from "../../store/user/userSlice";

export default function UserMenu() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.userInfo);

	function openSettings() {
		navigate("/settings");
	}

	function handleLogout() {
		localStorage.removeItem("token");
		dispatch(logout());
		dispatch(removeUser());
		navigate("/");
	}

	return (
		<div className="user--menu">
			<div className="menu--list">
				<div className="list--item" onClick={openSettings}>
					<FaCog />
					<span className="list--item_name">Settings</span>
				</div>
			</div>
			<div className="acc--logout" onClick={handleLogout}>
				Logout
			</div>
		</div>
	);
}
