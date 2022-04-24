import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./postContent.style.css";
import Postcomment from "../postComment/postcomment.component";
import Moment from "react-moment";
import SinglePostOptions from "../singlePostOptions/singlePostOptions.component";
import {
	fetchCurrentPost,
	fetchUserCurrentPost,
} from "../../store/post/postSlice";
import Loading from "../loading/loading.comonent";

export default function PostContent() {
	const user = useSelector((state) => state.user.userInfo);
	const dispatch = useDispatch();
	const post = useSelector((state) => state.post.currentPost);
	const { id } = useParams();

	useEffect(() => {
		const obj = {
			user_id: user.id,
			post_id: id,
		};
		user.id
			? dispatch(fetchUserCurrentPost(obj))
			: dispatch(fetchCurrentPost(obj.post_id));
	}, [user, id]);

	return (
		<div className="postContent--main">
			{user.id === post.author_id && (
				<div className="singlePost--edit">Edit</div>
			)}
			<div className="singlePost--header">
				<div className="singlePost--details">
					<div className="singlePost--details__author-pic"></div>
					<div className="singlePost--details__author-name">
						{post.author_full_name}
					</div>
					<div className="singlePost--details__publish-date">
						<Moment format="MMMM DD">{post.timestamp}</Moment>
					</div>
				</div>
			</div>
			<div className="singlePost--title">{post.title}</div>
			<div className="singlePost--content">{post.content}</div>
			{Object.keys(post).length === 0 && <Loading className="loading" />}
			<SinglePostOptions post={post} />
		</div>
	);
}
