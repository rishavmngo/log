import React from "react";
import "./feed.style.css";
import Post from "../post/post.component";


export default function Feed() {
	return (
		<div className="feed">
			<Post />
			<Post />
		</div>
	)
}