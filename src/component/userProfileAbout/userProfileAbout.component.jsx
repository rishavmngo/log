import React from "react";
import "./userProfileAbout.style.css";

import {
	FaTwitter,
	FaGithub,
	FaInstagram,
	FaHashtag,
	FaHome,
	FaPhoneSquareAlt,
	FaBookmark,
	FaDiscord,
} from "react-icons/fa";

export default function UserProfileAbout() {
	return (
		<div className="userProfileAbout profile__width">
			<div className="details__card">
				<div className="about--details__item">
					<span className="details--key">Name</span>
					<span className="details--value">Rishav Raj</span>
				</div>

				<div className="about--details__item">
					<span className="details--key">email</span>
					<span className="details--value">
						rishavinmngo@gmail.com
					</span>
				</div>
				<div className="about--details__item">
					<span className="details--key">Bio</span>
					<span className="details--value">
						I am a developer and I like open source currenly I am
						working on a web app called log.
					</span>
				</div>

				<div className="about--details__item">
					<span className="details--key">Location</span>
					<span className="details--value">Bihar, India</span>
				</div>
			</div>

			<div className="about_socials">
				<FaTwitter className="about_socials--item" />
				<FaGithub className="about_socials--item" />
				<FaInstagram className="about_socials--item" />
				<FaDiscord className="about_socials--item" />
			</div>
		</div>
	);
}
