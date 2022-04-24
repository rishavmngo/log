import React, { useEffect } from "react";
import "./feed.style.css";
import Post from "../post/post.component";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchFeed } from "../../store/feed/feedSlice";
import dog from "../../assets/horse.jpg";

export default function Feed() {
	const user = useSelector((state) => state.user.userInfo);
	const posts = useSelector((state) => state.feed.feedPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFeed(user.id));
	}, [user, dispatch]);

	return (
		<div className="feed">
			{posts.length <= 0 && (
				<div className="empty_container">
					<img
						src={dog}
						alt="empty feed pic"
						className="feed-empty"
					/>
					<h1>Hehee Empty!</h1>
				</div>
			)}
			{posts.map((post) => (
				<Post key={post.post_id} post={post} />
			))}
		</div>
	);
}
