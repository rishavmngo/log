import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import "./postContent.style.css";
import Postcomment from "../postComment/postcomment.component";

export default function PostContent() {
	const user = useSelector((state) => state.user.userInfo);
	const [post, setPost] = useState({});
	const { id } = useParams();
	useEffect(() => {
		fetchPosts();
	}, []);

	async function fetchPosts() {
		try {
			const result = await axios.get(
				`http://localhost:5000/api/post/${id}`
			);
			setPost(result.data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="postContent--main">
			{user.id === post.userid && (
				<div className="singlePost--edit">Edit</div>
			)}
			<div className="singlePost--header">
				<div className="singlePost--details">
					<div className="singlePost--details__author-pic"></div>
					<div className="singlePost--details__author-name">
						{post.full_name}
					</div>
					<div className="singlePost--details__publish-date">
						Apr 4
					</div>
				</div>
			</div>
			<div className="singlePost--title">{post.title}</div>
			<div className="singlePost--content">{post.content}</div>
		</div>
	);
}
