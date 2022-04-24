import React from "react";
import "./userProfilePosts.style.css";
import Post from "../post/post.component";

export default function UserProfilePosts() {
	const post = {};
	return (
		<div className="userProfilePosts profile__width">
			<Post post={post} />
			<Post post={post} />
		</div>
	);
}
