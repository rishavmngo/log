import React from 'react';
import { FaHeart } from 'react-icons/fa';
import "./post.style.css";
import PostOptions from '../post-options/post_options.component';

export default function Post() {
	return (
		<div className="post">
			<div className="author--details">
				<img src="../../assets/author.jpg" className="author--pic" />
				<div className="others">
					<p className="author--name">Rishav Raj</p>
					<p className="publish-date">Feb 7</p>
				</div>
			</div>
			<div className="post--details">
				<div className="post--title">How to build an Html-only accordion -- no JavaScript required!</div>
				<ul className="tag--list">
					<li className="tags">#webdev</li>
					<li className="tags">#html</li>
					<li className="tags">#beginners</li>
				</ul>
			</div>
			<PostOptions />
		</div>
	)
}
