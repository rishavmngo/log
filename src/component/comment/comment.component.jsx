import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentBlock from "../commentBlock/commentBlock.component";
import { useParams } from "react-router";

import "./comment.style.css";
import { fetchReplies } from "../../store/comment/commentSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../store/comment/commentSlice";

export default function Comment({ comment }) {
	const changeVal = useSelector((state) => state.comment.replies);
	const [replies, setReplies] = useState([]);
	const [showReply, setShowReply] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		async function fetchData() {
			try {
				const result = await axios.get(
					`http://localhost:5000/api/comment/reply/${comment.id}`
				);
				setReplies(result.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [changeVal]);
	return (
		<div className="comment-block">
			<div className="parent_comment">
				<CommentBlock key={comment.id} comment={comment} />
			</div>
			{!!replies.length && (
				<div
					className="show-replies-btn"
					onClick={() => setShowReply(!showReply)}
				>
					{showReply ? (
						<span className="show-replies toggler">
							hide replies
						</span>
					) : (
						<span className="show-replies toggler">
							show replies
						</span>
					)}
				</div>
			)}
			{showReply && (
				<div className="replies">
					{replies.map((comment) => (
						<CommentBlock
							key={comment.id}
							reply={true}
							comment={comment}
						/>
					))}
				</div>
			)}
		</div>
	);
}
