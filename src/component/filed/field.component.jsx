import React, { useState } from "react";
import "./field.style.css";

function Field({ value, handleChange, type, placeholder, label }) {
	const [focused, setFocus] = useState(false);

	function handleFocus() {
		setFocus(true);
	}
	function handleBlur() {
		if (value.length <= 0) {
			setFocus(false);
		}
	}
	function handleClick() {
		// setFocus(true)
	}

	return (
		<div className={`group ${focused ? "outline" : ""}`}>
			{label && (
				<label
					className={`center ${
						focused || value.length ? "trans" : ""
					}`}
					htmlFor=""
				>
					{label}
				</label>
			)}
			<input
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				className="inp "
				type={type}
			/>
		</div>
	);
}

export default Field;
