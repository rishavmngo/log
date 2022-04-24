import React from "react";
import "./userProfileFollowersCard.style.css";

export default function UserProfileFollowersCard() {
	return (
		<div className="userProfileFollowersCard">
			<div className="followerCard--pic"></div>
			<div className="followerCard--details">
				<span className="details__name">Utkarsh Yadav</span>
				<span className="details__username">@rytnix</span>
				<span className="details__bio">I am a software developer</span>
				<div className="followerCard--btn">Follow</div>
			</div>
		</div>
	);
}
