import React from "react";
import "./singlePost.style.css";
import PostContent from "../../component/postContent/postContent.component";
import Navbar from "../../component/navbar/navbar.component";
import Postcomment from "../../component/postComment/postcomment.component";

export default function SinglePost() {
	return (
		<div className="singlePost--main">
			<Navbar />
			<div className="main">
				<PostContent className="postContent-main" />
				<Postcomment />
			</div>
		</div>
	);
}
