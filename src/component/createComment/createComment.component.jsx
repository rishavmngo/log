import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "./createComment.style.css";

export default function CreateComment() {
	const [comment, setComment] = useState("");
	const userId = useSelector((state) => state.user.userInfo.id);
	const { id } = useParams();

	useEffect(() => {
		async function fetchData() {}
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const result = await axios.post(
				"http://localhost:5000/api/comment/",
				{
					userId,
					postId: id,
					comment,
				}
			);
			console.log(result.data);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<form className="createComment" onSubmit={handleSubmit}>
			<input
				type="text"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<input type="submit" value="comment" />
		</form>
	);
}
