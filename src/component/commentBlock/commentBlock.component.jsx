import React, { useState } from "react";
import "./commentBlock.style.css";
import Moment from "react-moment";
import CreateComment from "../createComment/createComment.component";
import { useSelector } from "react-redux";

export default function CommentBlock({ comment, reply }) {
	const [showReply, setShowReply] = useState(false);
	const user = useSelector((state) => state.auth.loggedIn);
	function handleReply() {
		setShowReply(!showReply);
	}
	return (
		<div className="commentBlock">
			<div className="comment--author-pic"></div>
			<div className="main--comment">
				<div className="comment--options">
					<div className="comment--options-left-child">
						<div className="comment--author-name full_name">
							{comment.full_name}
						</div>
						<div className="dot"></div>
						<div className="comment--publish-date">
							<Moment format="MMMM D">
								{comment.published_date}
							</Moment>
						</div>
					</div>

					<div className="comment--options-right-child"></div>
				</div>
				<div className="comment--desp">{comment.comment}</div>
				<div className="comment--reaction">
					<div className="comment--likes">1 likes</div>
					{user && !reply && (
						<div className="comment--reply" onClick={handleReply}>
							reply
						</div>
					)}
				</div>
			</div>
			<div className="createReply">
				{showReply && (
					<CreateComment parentId={comment.id} test={setShowReply} />
				)}
			</div>
		</div>
	);
}
