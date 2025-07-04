"use client";

import { NavBar, HeroSection, SearchBox } from "../page.js";
import { useGlobalState } from "../GlobalStateContext";

import css from "./page.module.css";

import { useEffect, useRef, useState } from "react";

const Products_PC_Parts = () => {
	const { category, setCategory } = useGlobalState();
	const { products, setProducts } = useGlobalState();
	const { query, setQuery } = useGlobalState();
	const { ALL_PRODUCTS } = useGlobalState();

	useEffect(() => {
		if (category !== "") {
			setProducts(ALL_PRODUCTS.filter((p) => p.category === category));	
		}
	}, [category]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="">
			<form onSubmit={handleSubmit} className="d-flex">
				<input
					type="search"
					className="form-control me-2 bg-dark text-light border-secondary"
					placeholder="Search..."
					aria-label="Search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="btn btn-outline-light" type="submit">
					Search
				</button>
			</form>

			<h6 className="text-light text-decoration-underline mt-2"> Product category: </h6>

			<select 
			   className="form-select me-2 bg-dark text-light border-secondary mt-2"
				 value={category} onChange={(e) => setCategory(e.target.value)}
			>
				<option value=""> Select a product category... </option>
				<option value="cpu"> CPUs </option>
				<option value="gpu"> GPUs </option>
				<option value="mbs"> Motherboards </option>
				<option value="hdd"> Hard drives </option>
			</select>

		</div>
	);
};

const stepsConfig = [
  {
    name: "Pick your item",
    Component: () => <Products_PC_Parts />
  },
  {
    name: "Shipping Info",
    Component: () => <></>,
  },
  {
    name: "Payment",
    Component: () => <></>,
  },
  {
    name: "Delivered",
    Component: () => <></>,
  },
];

const ProductCard = ({info}) => {
	const { currentStep, setCurrentStep } = useGlobalState();
	const { isComplete, setIsComplete } = useGlobalState();

	const handleNext = () => {
			setCurrentStep((prevStep) => {
					if (prevStep === stepsConfig.length) {
							setIsComplete(true);
							return prevStep;
					} else {
							return prevStep + 1;
					}
			});
	};

	return (
		<div className="card align-items-center" style={{ width: "18rem" }}>
			<img className="card-img-top p-3" src="/computer_parts.png" alt="Card image cap" style={{ width: "8rem", height: "auto" }} />
			<div className="card-body">
				<h5 className="card-title">{info.name}</h5>
			</div>
			<ul className="list-group list-group-flush">
				{
					Object.entries(info).filter(([key, value]) => key !== "id").map(([key, value]) => (
						<li className="list-group-item" key={value}>
							<strong>{key}:</strong> {value}
						</li>
					))
				}
			</ul>
			<div className="card-body">
				<button onClick={handleNext} className="card-link btn btn-primary"> Buy </button>
			</div>
		</div>
	);
};

const CheckoutStepper = () => {
		const { currentStep, setCurrentStep } = useGlobalState();
		const { isComplete, setIsComplete } = useGlobalState();

    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0,
    });
    const stepRef = useRef([]);

    useEffect(() => {
        setMargins({
            marginLeft: stepRef.current[0].offsetWidth / 2,
            marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
        });
    }, [stepRef, stepsConfig.length]);

		const handleNext = () => {
				setCurrentStep((prevStep) => {
						if (prevStep === stepsConfig.length) {
								setIsComplete(true);
								return prevStep;
						} else {
								return prevStep + 1;
						}
				});
		};

    if (!stepsConfig.length) {
        return <></>;
    }

    const calculateProgressBarWidth = () => {
        return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
    };

    const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

		const getIsComplete = (index) => {
			if (currentStep > index + 1 || isComplete) {
				return `${css.complete}`;
			}
			return "";
		};

		const getIsActive = (index) => {
			if (currentStep === index + 1) {
				return `${css.active}`;
			}
			return "";
		};

    return (
        <>
            <div className={`${css.stepper} text-white mt-5`}>
                {stepsConfig.map((step, index) => {
                    return (
                        <div
                            key={step.name}
                            ref={(el) => (stepRef.current[index] = el)}
                            className={`${css.step} ${getIsComplete(index)} ${getIsActive(index)} `}
                        >
                            <div className={`${css.step_number}`}>
                                {currentStep > index + 1 || isComplete ? (
                                    <span>&#10003;</span>
                                ) : (
                                    index + 1
                                )}
                            </div>
                            <div className={`${css.step_name}`}>{step.name}</div>
                        </div>
                    );
                })}

                <div
                    className={`${css.progress_bar}`}
                    style={{
                        width: `calc(100% - ${margins.marginLeft 
                                    + margins.marginRight}px)`,
                        marginLeft: margins.marginLeft,
                        marginRight: margins.marginRight,
                    }}
                >
                    <div
												className={`${css.progress}`}
                        style={{ width: `${calculateProgressBarWidth()}%` }}
                    ></div>
                </div>
            </div>

            <ActiveComponent />
        </>
    );
};

const CPU_Categories = () => {
	const { cpuBrand, setCpuBrand } = useGlobalState();
	const { cpuPrice, setCpuPrice } = useGlobalState();
	const { cpuMinFreq, setCpuMinFreq } = useGlobalState();
	const { cpuArch, setCpuArch } = useGlobalState();

	return (
		<>
			<span className="text-primary"> Additional filters </span> 

			<span className="text-decoration-underline"> Brand: </span>
			<select 
			   className="form-select text-reset"
				 value={cpuBrand} onChange={(e) => setCpuBrand(e.target.value)}
			   style={{ backgroundColor: "var(--dark-color-hex)" }}
			>
				<option value=""> All brands </option>
				<option value="intel"> Intel </option>
				<option value="AMD"> AMD </option>
				<option value="Apple"> Apple </option>
			</select>

			<span className="text-decoration-underline"> Architectures: </span>
			<select 
			   className="form-select text-reset"
				 value={cpuArch} onChange={(e) => setCpuArch(e.target.value)}
			   style={{ backgroundColor: "var(--dark-color-hex)" }}
			>
				<option value=""> All architectures </option>
				<option value="x86"> x86 </option>
				<option value="x64"> x64 </option>
				<option value="arm"> arm </option>
				<option value="mips"> mips </option>
			</select>

			<label htmlFor="priceRange" className="text-decoration-underline"> Maximum price: {cpuPrice} $CAD </label>
      <input
        type="range"
        className="form-range"
        id="priceRange"
        min={50}
        max={10000}
        step={10}
        value={cpuPrice}
        onChange={(e) => setCpuPrice(e.target.value)}
      />

			<label htmlFor="freqRange" className="text-decoration-underline"> Minimum frequency: {cpuMinFreq} GHz </label>
      <input
        type="range"
        className="form-range"
        id="freqRange"
        min={1}
        max={6}
        step={0.25}
        value={cpuMinFreq}
        onChange={(e) => setCpuMinFreq(e.target.value)}
      />

		</>
	);
};/* }}} */


export default function Buy() {
	const { products } = useGlobalState();

	return (
		<div className="container h-100">
			<NavBar />
			<CheckoutStepper />
			

			<div className="d-flex flex-wrap gap-3 mt-4">
				{
					products.map((p) => <ProductCard key={p.name + "1"} info={p} />)
				}
			</div>
		</div>
	);
}
