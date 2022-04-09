import React, { useEffect, useState } from "react";
import "./feed.style.css";
import Post from "../post/post.component";
import axios from "axios";

export default function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchPosts();
	}, []);

	async function fetchPosts() {
		try {
			const result = await axios.get("http://localhost:5000/api/post/");
			setPosts(result.data);
			console.log(posts);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className="feed">
			{posts.map((post) => (
				<Post key={post.post_id} post={post} />
			))}
		</div>
	);
}
