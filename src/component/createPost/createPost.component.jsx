import React from "react";
import "./createPost.style.css";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function CreatePost() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.userInfo);

	async function handleSubmit(e) {
		e.preventDefault();
		if (title.length <= 0 && content.length <= 0) return;
		try {
			const result = await axios.post("http://localhost:5000/api/post", {
				authorId: user.id,
				title,
				content,
			});
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="title"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					className="title"
				/>
				<input
					type="text"
					placeholder="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					className="content"
				/>
				<input
					type="submit"
					className="submit--btn"
					name="submit"
					value="submit"
				/>
			</form>
		</div>
	);
}
