"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import css from "./page.module.css";

import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useGlobalState } from "./GlobalStateContext";

import React from "react";



export const SearchBox = () => {
  const { query, setQuery } = useGlobalState();

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
			<a href="/" className="d-flex text-decoration-none align-items-center gap-4">
				<img src="/computer.png" className={`${css.logo_image}`} />
				<span className={`${css.source_bold} ${css.white}`}> PCBuilder </span>
			</a>
		</nav>
	);
};

function HomePage() {
  return (
		<>
		<NavBar />
    <main className="bg-light text-dark">
      {/* Hero Section */}
      <section className="container py-5 text-center">
        <h1 className="display-4 fw-bold">Build Your Dream PC</h1>
        <p className="lead mb-4">
          High-performance components for gamers, creators, and professionals.
        </p>
        <a href="/home" className="btn btn-primary btn-lg">
          Shop Now
        </a>
      </section>

      {/* Featured Categories */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card h-100 text-center align-items-center border-0 shadow-sm">
              <img
                src="/computer_parts.png"
                className="card-img-top"
                alt="CPUs"
								style={{ width: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">CPUs</h5>
                <a href="/home" className="btn btn-outline-primary btn-sm">
                  View CPUs
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center align-items-center border-0 shadow-sm">
              <img
                src="/computer_parts_1.png"
								style={{ width: "100px" }}
                className="card-img-top"
                alt="GPUs"
              />
              <div className="card-body">

                <h5 className="card-title">GPUs</h5>
                <a href="/home" className="btn btn-outline-primary btn-sm">
                  View GPUs
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center align-items-center border-0 shadow-sm">
              <img
                src="/computer_parts_3.png"
                className="card-img-top"
                alt="Motherboards"
								style={{ width: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Motherboards</h5>
                <a href="/home" className="btn btn-outline-primary btn-sm">
                  View Motherboards
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center align-items-center border-0 shadow-sm">
              <img
                src="/computer_parts_2.png"
                className="card-img-top"
                alt="Storage"
								style={{ width: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Storage</h5>
                <a href="/home" className="btn btn-outline-primary btn-sm">
                  View Storage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        &copy; {new Date().getFullYear()} PCBuilder. All rights reserved.
      </footer>
    </main>
</>
  );
}

export const HeroSection = () => {
	return (
		<div className="border-start border-end border-dark h-100">
			<div className={`text-center ${css.white}`}>
				<h1 className="pt-5"> Get your dream PC now! </h1> 
				<p> Explore top-quality PC parts and pre-built computers at the best prices. </p>
			</div>

			<div className="d-flex">
				<div className="flex-fill row row-cols-3 mt-5 g-4 ">
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
						<img src="/computer_parts.png" style={{width: 'auto', height: '90px'}} />
					</div>
					<div className="col text-center">
						<img src="/computer_parts_7.png" style={{width: 'auto', height: '90px'}} />
					</div>
					<div className={`col-12 mt-5 text-center ${css.white}`}>
						<a href="/buy" className="text-decoration-none btn btn-primary">  Explore PC parts </a>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default function Home() {

	return (
		<HomePage />
	);
}
