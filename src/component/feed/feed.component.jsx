import React, { useEffect, useState } from "react";
import "./feed.style.css";
import Post from "../post/post.component";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchFeed, fetchUserFeed } from "../../store/feed/feedSlice";
import dog from "../../assets/horse.jpg";

export default function Feed() {
	const user = useSelector((state) => state.user.userInfo);
	const posts = useSelector((state) => state.feed.feedPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		user.id ? dispatch(fetchUserFeed(user.id)) : dispatch(fetchFeed());
	}, [user]);

	return (
		<div className="feed">
			{posts.length <= 0 && (
				<div className="empty_container">
					<img src={dog} className="feed-empty" />
					<h1>Hehee Empty!</h1>
				</div>
			)}
			{posts.map((post) => (
				<Post key={post.post_id} post={post} />
			))}
		</div>
	);
}
