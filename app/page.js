"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import css from "./page.module.css";

import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const CartIcon = ({ count }) => {
	return (
		<div className="position-relative d-inline-block">
			<FaShoppingCart size={32} style={{ color: "#FF7733"}} />
			<span
				className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger"
				style={{ fontSize: '0.75rem' }}
			>
				{count}
			</span>
		</div>
	);
};

const NavBar = ({cartCount}) => {
	return (
		<nav className="d-flex justify-content-between align-items-center border-dark border-bottom p-3">
			<div className="d-flex align-items-center gap-4">
				<img src="/computer.png" className={`${css.logo_image}`} />
				<span className={`${css.source_bold} ${css.white}`}> PCBuilder </span>
			</div>
			<CartIcon count={cartCount} />
		</nav>
	);
};

const HeroSection = () => {
	return (
		<div>
		</div>
	);
};

const ActionBar = () => {
	return (
		<div className={`d-flex border-bottom border-dark ${css.white} ${css.source_med} border-light gap-3 p-3`}>
			<div>
				<a href="#">Components</a>
			</div>	
			<div>
				<a href="#">Prebuilts</a>
			</div>	
		</div>
	);
};

export default function Home() {
	const [cartCount, setCartCount] = useState(0);

	return (
		<div className="container">
			<NavBar cartCount={cartCount} />
			<ActionBar />
			<HeroSection />
		</div>
	);
}
