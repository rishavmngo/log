import React from "react";
import "./userCard.style.css";

export default function UserCard({ user }) {
	return (
		<div className="header">
			<div className="header--pic"></div>
			<div className="details">
				<div className="details--item details--name">
					{user.firstname} {user.lastname}
				</div>
				<div className="details--item details--username">
					{user.username}
				</div>
				<div className="details--item details--email">{user.email}</div>
			</div>
		</div>
	);
}
