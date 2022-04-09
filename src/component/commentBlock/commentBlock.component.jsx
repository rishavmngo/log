import React from "react";
import "./commentBlock.style.css";

export default function CommentBlock({ comment, reply }) {
	return (
		<div className="commentBlock">
			<div className="comment--author-pic"></div>
			<div className="main--comment">
				<div className="comment--options">
					<div className="comment--options-left-child">
						<div className="comment--author-name">
							{comment.full_name}
						</div>
						<div className="dot"></div>
						<div className="comment--publish-date">may 8</div>
					</div>

					<div className="comment--options-right-child"></div>
				</div>
				<div className="comment--desp">{comment.comment}</div>
				<div className="comment--reaction">
					<div className="comment--likes">1 likes</div>
					{!reply && <div className="comment--reply">reply</div>}
				</div>
			</div>
		</div>
	);
}
