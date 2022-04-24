import React, { useEffect } from "react";
import "./singlePostOptions.style.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { unlike, like } from "../../store/like/like";
import { fetchCurrentPost } from "../../store/post/postSlice";
import { useNavigate } from "react-router";
import { fetchUserCurrentPost } from "../../store/post/postSlice";

export default function SinglePostOptions() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.userInfo);
	const post = useSelector((state) => state.post.currentPost);
	const navigate = useNavigate();
	const userLikedStatus = useSelector((state) => state.like.currentPostLiked);
	const userUnlikedStatus = useSelector(
		(state) => state.like.currentPostUnliked
	);
	const userLikedProcessing = useSelector((state) => state.like.processing);
	const userLoggedIn = useSelector((state) => state.auth.loggedIn);
	function liked(obj) {
		dispatch(like(obj));
	}

	function unLiked(obj) {
		dispatch(unlike(obj));
	}
	async function handleLike() {
		// console.log("clicked", userLoggedIn);
		if (!userLoggedIn) {
			navigate("/auth/login");
		}
		const obj = {
			user_id: user.id,
			post_id: post.id,
		};
		post.user_liked ? unLiked(obj) : liked(obj);
	}
	useEffect(() => {
		const obj = {
			user_id: user.id,
			post_id: post.id,
		};
		user.id
			? dispatch(fetchUserCurrentPost(obj))
			: dispatch(fetchCurrentPost(obj.post_id));
	}, [userLikedStatus, userUnlikedStatus, user.id, dispatch, post.id]);

	return (
		<div className="singlePostOptions">
			<div
				className={`singlePost--likes ${
					userLikedProcessing ? "processing_like" : ""
				}`}
				onClick={handleLike}
			>
				{post.user_liked ? (
					<AiFillHeart className="like--heart__filled " />
				) : (
					<AiOutlineHeart className="like--heart__outline " />
				)}
				<span className="singlePost--like__count">
					{post.likes_count}
				</span>
			</div>
		</div>
	);
}
