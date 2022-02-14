import React from 'react';
import "./sidebar.style.css";
import { FaTwitter, FaGithub, FaInstagram, FaHashtag, FaHome, FaPhoneSquareAlt, FaBookmark, FaDiscord } from 'react-icons/fa';
import { MdArticle } from "react-icons/md"

export default function Sidebar() {
	return (
		<div className="sidebar">
			<ul className="list">
				<li className="list-item">
					<FaHome />
					<div className="sidebar--item">Home</div>
				</li>
				<li className="list-item">
					<MdArticle />
					<div className="sidebar--item">subscription</div>
				</li>
				<li className="list-item">
					<FaHashtag />
					<div className="sidebar--item">Tags</div>
				</li>
				<li className="list-item">
					<FaBookmark />
					<div className="sidebar--item">Saved</div>
				</li>
				<li className="list-item">
					<FaPhoneSquareAlt />
					<div className="sidebar--item">Contact</div>
				</li>

			</ul>
			<div className="socials">
				<FaTwitter className="socials--item" />
				<FaGithub className="socials--item" />
				<FaInstagram className="socials--item" />
				<FaDiscord className="socials--item" />

			</div>
		</div>
	)
}