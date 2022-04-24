import React from "react";
import UserProfileFollowersCard from "../userProfileFollowersCard/userProfileFollowersCard.component";
import "./userProfileFollowers.style.css";

export default function UserProfileFollowers() {
	return (
		<div className="userProfileFollowers profile__width">
			<UserProfileFollowersCard />
			<UserProfileFollowersCard />
			<UserProfileFollowersCard />
			<UserProfileFollowersCard />
			<UserProfileFollowersCard />
			<UserProfileFollowersCard />
			<UserProfileFollowersCard />
			<UserProfileFollowersCard />
		</div>
	);
}
