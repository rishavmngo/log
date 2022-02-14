import React from 'react';
import "./post_options.style.css"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiMessageSquare } from 'react-icons/bi'


export default function PostOptions() {
	return (
		<div className="post-options">
			<div className='post-attr' >
				<div className="post--likes">
					<AiOutlineHeart />
					{/* <AiFillHeart /> */}
					<div className="like-count">119 Reactions</div>
				</div>
				<div className="post--comments">
					<BiMessageSquare />
					<div className="comment-count">17 Comments</div>
				</div>
			</div>
			<div className="post-actions">
				<div className="post-actions--save">Save</div>
			</div>
		</div>
	)
}