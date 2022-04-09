import React, { useState, useEffect } from "react";
import "./postComment.style.css";
import Comment from "../comment/comment.component";
import axios from "axios";
import { useParams } from "react-router";
import CreateComment from "../createComment/createComment.component";

export default function Postcomment({ post }) {
	const [comments, setComment] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		async function fetchData() {
			const commentRes = await axios.get(
				`http://localhost:5000/api/comment/${id}`
			);
			// const replyRes = await axios.get(
			// 	`http://localhost:5000/api/reply/${commentRes.data.id}`
			// );
			// console.log(replyRes);
			setComment(commentRes.data);
		}
		fetchData();
	}, []);

	return (
		<div className="comment--section">
			<h1 className="comment--section__title">Comments</h1>
			<CreateComment />
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	);
}
