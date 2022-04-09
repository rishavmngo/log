import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../component/navbar/navbar.component";
import "./settings.style.css";
import { Navigate, useNavigate, useParams } from "react-router";
import { setSettingUser } from "../../store/auth/authSlice";
import axios from "axios";
import UserCard from "../../component/userCard/userCard.component";

export default function Settings() {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.userInfo);
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		if (token.length <= 0) {
			navigate("/");
		}
	});

	return (
		<div className="setting">
			<Navbar />
			<UserCard user={user} />
		</div>
	);
}
