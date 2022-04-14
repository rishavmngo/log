import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { changeValue, fetchComment } from "../../store/comment/commentSlice";
import "./createComment.style.css";

export default function CreateComment({ parentId, test }) {
	const [comment, setComment] = useState("");
	const userId = useSelector((state) => state.user.userInfo.id);
	const dispatch = useDispatch();
	const { id } = useParams();

	async function handleSubmit(e) {
		e.preventDefault();
		if (!parentId) {
			parentId = null;
		}

		try {
			const result = await axios.post(
				"http://localhost:5000/api/comment/",
				{
					userId,
					postId: id,
					comment,
					parentId: parentId,
				}
			);
			dispatch(fetchComment(id));
			dispatch(changeValue());
		} catch (error) {
			console.log(error);
		}
		test(false);
	}
	return (
		<form className="createComment" onSubmit={handleSubmit}>
			<input
				type="text"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				className="comment--input"
				autoFocus
			/>
			<input class="create--comment--btn" type="submit" value="comment" />
		</form>
	);
}
