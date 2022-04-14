import React from "react";
import "./post_options.style.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiMessageSquare } from "react-icons/bi";

export default function PostOptions({ post }) {
	console.log(post.user_liked === true);
	return (
		<div className="post-options">
			<div className="post-attr">
				<div className="post--likes">
					{post.user_liked !== "true" ? (
						<AiOutlineHeart />
					) : (
						<AiFillHeart className="like--filled" />
					)}
					<div className="like-count">
						{post.likes_count} Reactions
					</div>
				</div>
				<div className="post--comments">
					<BiMessageSquare />
					<div className="comment-count">
						{post.comments_count} Comments
					</div>
				</div>
			</div>
			<div className="post-actions">
				<div className="post-actions--save">Save</div>
			</div>
		</div>
	);
}
