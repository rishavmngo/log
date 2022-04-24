import React from "react";
import "./userProfilePageMain.style.css";

export default function UserProfilePageMain() {
	return (
		<div className="userProfilePageMain profile__width">
			<div className="user--profile__details">
				<div className="user__profile--pic"></div>
				<div className="user--profile__secondary">
					<div className="user__secondary--details">
						<p className="user--profile__name">Rishav Raj</p>
						<p className="user--profile__username">@rishav-mngo</p>
					</div>
					<div className="follow-btn">Follow</div>
				</div>
			</div>
			<div className="profile--highlights">
				<div className="profile--highlights__followers">
					<p className="profile--highlights_text">Followers</p>
					<p className="highlights__stats">110</p>
				</div>
				<div className="profile--highlights__posts">
					<p className="profile--highlights_text">Posts</p>
					<p className="highlights__stats">26</p>
				</div>
			</div>
		</div>
	);
}
