import React from "react";
import "./userProfileTabs.style.css";

export default function UserProfileTabs({ tabNumber, setTabNumber }) {
	return (
		<div className="userProfileTabs profile__width">
			<div
				className={`userProfileTabs--tab ${
					tabNumber === 1 ? "active__tab" : ""
				}`}
				onClick={() => setTabNumber(1)}
			>
				Posts
			</div>
			<div
				className={`userProfileTabs--tab ${
					tabNumber === 2 ? "active__tab" : ""
				}`}
				onClick={() => setTabNumber(2)}
			>
				About
			</div>
			<div
				className={`userProfileTabs--tab ${
					tabNumber === 3 ? "active__tab" : ""
				}`}
				onClick={() => setTabNumber(3)}
			>
				Following
			</div>
		</div>
	);
}
