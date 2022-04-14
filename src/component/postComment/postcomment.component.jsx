import React, { useState, useEffect } from "react";
import "./postComment.style.css";
import Comment from "../comment/comment.component";
import axios from "axios";
import { useParams } from "react-router";
import CreateComment from "../createComment/createComment.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchComment } from "../../store/comment/commentSlice";

export default function Postcomment({ post }) {
	// const [comments, setComment] = useState([]);
	const comments = useSelector((state) => state.comment.comments);
	const userLoggedIn = useSelector((state) => state.auth.loggedIn);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		// async function fetchData() {
		// 	const commentRes = await axios.get(
		// 		`http://localhost:5000/api/comment/${id}`
		// 	);
		// 	// const replyRes = await axios.get(
		// 	// 	`http://localhost:5000/api/reply/${commentRes.data.id}`
		// 	// );
		// 	// console.log(replyRes);
		// 	setComment(commentRes.data);
		// }
		// fetchData();
		dispatch(fetchComment(id));
	}, []);

	return (
		<div className="comment--section">
			<h1 className="comment--section__title">Comments</h1>
			{userLoggedIn && <CreateComment />}
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	);
}
