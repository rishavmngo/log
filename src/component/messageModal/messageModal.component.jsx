import React from "react";
import "./messageModal.style.css";
import { useEffect, useState } from "react";

export default function MessageModal({ style }) {
	// const [modalHide, setModalHide] = useState(false);

	return (
		<div className={`modal  ${style} `}>
			<div className="modal-message">
				{" "}
				{style === "success"
					? "Registerd Successfully"
					: "Registration Failed"}
			</div>
		</div>
	);
}
