import React, { useState } from "react";
import "./userProfilePage.style.css";
import UserProfilePageMain from "../userProfilePageMain/userProfilePageMain.component";
import UserProfilePosts from "../userProfilePosts/userProfilePosts.component";
import Navbar from "../navbar/navbar.component";
import UserProfileTabs from "../userProfileTabs/userProfileTabs.component";
import UserProfileAbout from "../userProfileAbout/userProfileAbout.component";
import UserProfileFollowers from "../userProfileFollowers/userProfileFollowers.component";

export default function UserProfilePage() {
	const [tabNumber, setTabNumber] = useState(2);

	function fetchTabs() {
		switch (tabNumber) {
			case 1:
				return <UserProfilePosts />;
			case 2:
				return <UserProfileAbout />;
			case 3:
				return <UserProfileFollowers />;
			default:
				break;
		}
	}

	return (
		<div className="user-profile-page">
			<Navbar />
			<UserProfilePageMain />
			<UserProfileTabs
				tabNumber={tabNumber}
				setTabNumber={setTabNumber}
			/>
			{fetchTabs()}
		</div>
	);
}
