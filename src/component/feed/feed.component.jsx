import React, { useEffect, useState } from "react";
import "./feed.style.css";
import Post from "../post/post.component";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Feed() {
	const [posts, setPosts] = useState([]);
	const user = useSelector((state) => state.user.userInfo);

	useEffect(() => {
		user.id && fetchPosts();
	}, [user]);

	async function fetchPosts() {
		try {
			const result = await axios.get(
				`http://localhost:5000/api/post/feed/${user.id}`
			);
			setPosts(result.data);
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
