import React from "react";
import { FaHeart } from "react-icons/fa";
import "./post.style.css";
import PostOptions from "../post-options/post_options.component";
import { useNavigate } from "react-router";

export default function Post({ post }) {
	const navigate = useNavigate();
	return (
		<div className="post">
			<div className="author--details">
				<img src="../../assets/author.jpg" className="author--pic" />
				<div className="others">
					<p className="author--name">{post.author_full_name}</p>
					<p className="publish-date">Feb 7</p>
				</div>
			</div>
			<div className="post--details">
				<div
					className="post--title"
					onClick={() => navigate(`/post/${post.post_id}`)}
				>
					{post.title}
				</div>
				<ul className="tag--list">
					<li className="tags">#webdev</li>
					<li className="tags">#html</li>
					<li className="tags">#beginners</li>
				</ul>
			</div>
			<PostOptions post={post} />
		</div>
	);
}
