"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import css from "./page.module.css";

import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useGlobalState } from "./GlobalStateContext";

import React from "react";

export const NavBar = () => {
	const { cartCount } = useGlobalState();

	return (
		<nav className="d-flex justify-content-between align-items-center border-dark border p-3">
			<a href="/pcbuilder" className="d-flex text-decoration-none align-items-center gap-4">
				<img src="/pcbuilder/computer.png" className={`${css.logo_image}`} />
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
        <a href="/pcbuilder/home" className="btn btn-primary btn-lg">
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
                src="/pcbuilder/computer_parts.png"
                className="card-img-top"
                alt="CPUs"
								style={{ width: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">CPUs</h5>
                <a href="/pcbuilder/home" className="btn btn-outline-primary btn-sm">
                  View CPUs
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center align-items-center border-0 shadow-sm">
              <img
                src="/pcbuilder/computer_parts_1.png"
								style={{ width: "100px" }}
                className="card-img-top"
                alt="GPUs"
              />
              <div className="card-body">

                <h5 className="card-title">GPUs</h5>
                <a href="/pcbuilder/home" className="btn btn-outline-primary btn-sm">
                  View GPUs
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center align-items-center border-0 shadow-sm">
              <img
                src="/pcbuilder/computer_parts_3.png"
                className="card-img-top"
                alt="Motherboards"
								style={{ width: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Motherboards</h5>
                <a href="/pcbuilder/home" className="btn btn-outline-primary btn-sm">
                  View Motherboards
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center align-items-center border-0 shadow-sm">
              <img
                src="/pcbuilder/computer_parts_2.png"
                className="card-img-top"
                alt="Storage"
								style={{ width: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Storage</h5>
                <a href="/pcbuilder/home" className="btn btn-outline-primary btn-sm">
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

export default function Home() {

	return (
		<HomePage />
	);
}
