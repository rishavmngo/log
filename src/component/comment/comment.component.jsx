import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentBlock from "../commentBlock/commentBlock.component";
import { useParams } from "react-router";

import "./comment.style.css";

export default function Comment({ comment }) {
	const [replies, setReplies] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const replyRes = await axios.get(
				`http://localhost:5000/api/comment/reply/${comment.id}`
			);
			setReplies(replyRes.data);
		}
		fetchData();
	}, []);
	return (
		<div className="comment-block">
			<div className="parent_comment">
				<CommentBlock key={comment.id} comment={comment} />
			</div>
			<div className="replies">
				{replies.map((comment) => (
					<CommentBlock
						key={comment.id}
						reply={true}
						comment={comment}
					/>
				))}
			</div>
		</div>
	);
}
