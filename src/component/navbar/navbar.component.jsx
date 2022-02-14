import React from 'react'
import { FaSistrix } from "react-icons/fa"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import "./navbar.style.css";
export default function Navbar() {
	return (
		<header className="navbar">
			<Logo className='logo' />
			<nav>
				<div className="search-box">
					<input type="input" placeholder="Search..." class="search-box--input"></input>
					<FaSistrix class="search-box--search" />
				</div>
				<div className="acc">
					<span className="acc--login">Log in</span>
					<span className="acc--create">Create account</span>
				</div>
			</nav>


		</header>
	)
}
