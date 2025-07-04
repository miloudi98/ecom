"use client";

import { createContext, useState, useContext } from "react";

const ALL_PRODUCTS = [
	{ id: 1, category: "cpu", name: "ryzen9 5950X", "core count": "16-C/32-T", "Idle frequency (GHz)": 2.5, "TDP": "105W" }
];

// Create the context
const GlobalStateContext = createContext();

// Create a Provider component
export function GlobalStateProvider({ children }) {
	const [cartCount, setCartCount] = useState(0);
	const [category, setCategory] = useState("");
	const [query, setQuery] = useState("");
	const [cpuBrand, setCpuBrand] = useState("");
	const [cpuPrice, setCpuPrice] = useState(200);
	const [cpuMinFreq, setCpuMinFreq] = useState(1);
	const [cpuArch, setCpuArch] = useState("");
	const [currentStep, setCurrentStep] = useState(1);
	const [isComplete, setIsComplete] = useState(false);
	const [products, setProducts] = useState(ALL_PRODUCTS);

	return (
			<GlobalStateContext.Provider value={{ cartCount, setCartCount,
														category, setCategory,
														query, setQuery,
														currentStep, setCurrentStep,
														isComplete, setIsComplete,
														cpuBrand, setCpuBrand,
														cpuPrice, setCpuPrice,
														cpuMinFreq, setCpuMinFreq,
														cpuArch, setCpuArch,
														products, setProducts,
														ALL_PRODUCTS
			}}>
			{children}
			</GlobalStateContext.Provider>
			);
}

// Custom hook for easy access
export function useGlobalState() {
	return useContext(GlobalStateContext);
}

