"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import css from "./page.module.css";

import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useGlobalState } from "./GlobalStateContext";

export const SearchBox = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the search term
    console.log("Searching for:", query);
    // For example: navigate, filter, etc.
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="search"
        className="form-control text-reset me-4"
	style={{ backgroundColor: "var(--dark-color-hex)" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-dark" type="submit">
        Search
      </button>
    </form>
  );
}

export const CartIcon = ({ count }) => {
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

export const NavBar = () => {
	const { cartCount } = useGlobalState();
	return (
		<nav className="d-flex justify-content-between align-items-center border-dark border p-3">
			<div className="d-flex align-items-center gap-4">
				<img src="/computer.png" className={`${css.logo_image}`} />
				<span className={`${css.source_bold} ${css.white}`}> PCBuilder </span>
			</div>
			<CartIcon count={cartCount} />
		</nav>
	);
};

export const HeroSection = () => {
	return (
		<div className="border-start border-end border-dark h-100">
			<div className={`text-center ${css.white}`}>
				<h1 className="pt-5"> Get your dream PC now! </h1> 
				<p> Explore top-quality PC parts and pre-built computers at the best prices. </p>
			</div>

			<div className="d-flex">
				<div className="flex-fill row row-cols-2 mt-5 g-4 border-end border-dark">
					<div className="col text-center">
						<img src="/computer_parts.png" style={{width: 'auto', height: '90px'}} />
					</div>
					<div className="col text-center">
						<img src="/computer_parts_1.png" style={{width: 'auto', height: '90px'}} />
					</div>
					<div className="col text-center">
						<img src="/computer_parts_2.png" style={{width: 'auto', height: '90px'}} />
					</div>
					<div className="col text-center">
						<img src="/computer_parts_3.png" style={{width: 'auto', height: '90px'}} />
					</div>
					<div className={`col-12 mt-5 text-center ${css.white}`}>
						<a href="/buy" className="text-decoration-none btn btn-primary">  Explore PC parts </a>
					</div>
				</div>
				
				<div className="flex-fill row row-cols-2 mt-5 g-4">
					<div className="col text-center">
						<img src="/computer_parts_4.png" style={{width: 'auto', height: '90px'}} />
					</div>
					<div className="col text-center">
						<img src="/computer_parts_5.png" style={{width: 'auto', height: '90px'}} />
					</div>
					<div className="col text-center">
						<img src="/computer_parts_6.png" style={{width: 'auto', height: '90px'}} />
					</div>
					<div className="col text-center">
						<img src="/computer_parts_7.png" style={{width: 'auto', height: '90px'}} />
					</div>
					<div className={`col-12 mt-5 text-center ${css.white}`}>
						<a href="/buy" className="btn btn-primary text-decoration-none"> Explore pre-built PCs </a>
					</div>
				</div>
			</div>
		</div>
	);
};

export const ActionBar = () => {
	return (
		<div className={`d-flex border-bottom border-dark ${css.white} ${css.source_med} border-light`}>
			<div className="border-start border-dark p-3">
				<a href="/buy" id="pcparts" className={`text-reset text-decoration-none `}>PC Parts</a>
			</div>	
			<div className="border-start border-dark border-end border-dark p-3">
				<a href="/buy" className={`text-reset text-decoration-none `}>Pre-Builts</a>
			</div>
			<div className="flex-fill border-end border-dark">
			</div>	
		</div>
	);
};

export default function Home() {

	return (
		<div className="container h-100">
			<NavBar />
			<ActionBar />
			<HeroSection />
		</div>
	);
}
