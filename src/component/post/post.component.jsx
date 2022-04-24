import React from "react";
import { FaHeart } from "react-icons/fa";
import "./post.style.css";
import PostOptions from "../post-options/post_options.component";
import { useNavigate } from "react-router";
import author from "../../assets/author.jpg";
import Moment from "react-moment";

export default function Post({ post }) {
	const navigate = useNavigate();
	return (
		<div className="post">
			<div className="author--details">
				<img src={author} className="author--pic" />
				<div className="others">
					<p
						className="author--name"
						onClick={() => navigate(`/${post.username}`)}
					>
						{post.author_full_name}
					</p>
					<p className="publish-date">
						<Moment format="MMMM DD">{post.timestamp}</Moment>
					</p>
				</div>
			</div>
			<div className="post--details">
				<div
					className="post--title"
					onClick={() => navigate(`/post/${post.id}`)}
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
