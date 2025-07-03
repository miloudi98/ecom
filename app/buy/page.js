"use client";

import { NavBar, ActionBar, HeroSection, SearchBox } from "../page.js";
import { useGlobalState } from "../GlobalStateContext";

import css from "../page.module.css";

const CPU_Categories = () => {
	return (
		<>
			<span className="text-decoration-underline"> Brand: </span>
			<select 
			   className="form-select text-reset"
			   value={category} onChange={(e) => setCategory(e.value)}
			   style={{ backgroundColor: "var(--dark-color-hex)" }}
			>
				<option value=""> All Categories </option>
				<option value="intel"> Intel </option>
				<option value="AMD"> AMD </option>
				<option value="Apple"> Apple </option>
			</select>
		</>
	);
};

const Products_PC_Parts = () => {
	const { category, setCategory } = useGlobalState();

	return (
		<div className={`d-flex h-100 ${css.white} border-start border-end border-dark`}>
			<div className="d-flex flex-column p-4 border-end border-dark gap-4">
				<span className="text-decoration-underline"> Keyword search: </span>
				<SearchBox />

				<span className="text-decoration-underline"> Select category: </span>
				<select 
                                   className="form-select text-reset"
                                   value={category} onChange={(e) => setCategory(e.value)}
                                   style={{ backgroundColor: "var(--dark-color-hex)" }}
                                >
					<option value=""> All Categories </option>
					<option value="cpu"> CPU </option>
					<option value="gpu"> GPU </option>
					<option value="mbs"> Motherboards </option>
					<option value="hdd"> Hard drives </option>
				</select>

			</div>	
				
			<div className="">
			</div>
		</div>
	);
};

export default function Buy() {
	return (
		<div className="container h-100">
			<NavBar />
			<ActionBar />
			<Products_PC_Parts />
		</div>
	);
}
