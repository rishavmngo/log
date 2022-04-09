import react, { useEffect, useState } from "react";
import "./app.css";
import Homepage from "./pages/homepage/homepage.component";
import Navbar from "./component/navbar/navbar.component";
import Settings from "./pages/settings/settings.component";
import UserAuth from "./pages/user_auth/user_auth.component";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/user/userSlice";
import jwtDecode from "jwt-decode";
import SinglePost from "./pages/singlePost/singlePost.component";
import CreatePost from "./component/createPost/createPost.component";
import NotFound from "./component/notFound/notFound.component";

export default function App() {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		if (token.length <= 0) return;
		dispatch(setUser(jwtDecode(token).id));
	});

	return (
		<>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<Homepage />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/auth/login" element={<UserAuth />} />
				<Route path="/auth/register" element={<UserAuth />} />
				<Route exact path="/post/:id" element={<SinglePost />} />
				<Route path="/createPost" element={<CreatePost />} />
			</Routes>
		</>
	);
}
