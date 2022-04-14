import React, { useState } from "react";
import CommentBlock from "../commentBlock/commentBlock.component";

import "./comment.style.css";
import { useSelector } from "react-redux";

export default function Comment({ comment }) {
	const [showReply, setShowReply] = useState(false);
	const replies = useSelector((state) => state.comment.comments)
		.filter((i) => i.parent_id === comment.id)
		.sort(
			(a, b) =>
				a.published_date < b.published_date &&
				a.published_time < b.published_time
		);

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
							{`show replies (${replies.length})`}
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
