"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState, useEffect } from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Pick item', 'Enter payment details', 'Checkout'];

const CPUs = [
  {
		imageURL: "/computer_parts.png",
    name: "Intel Core i9-13900K",
    properties: {
      "Cores": "24",
      "Threads": "32",
      "Base Frequency": "3.0 GHz",
      "Boost Frequency": "5.8 GHz",
      "TDP": "125W",
      "Socket": "LGA1700",
    }
  },
  {
		imageURL: "/computer_parts.png",
    name: "AMD Ryzen 9 7950X",
    properties: {
      "Cores": "16",
      "Threads": "32",
      "Base Frequency": "4.5 GHz",
      "Boost Frequency": "5.7 GHz",
      "TDP": "170W",
      "Socket": "AM5"
    }
  },
  {
		imageURL: "/computer_parts.png",
    name: "Intel Core i5-13600K",
    properties: {
      "Cores": "14",
      "Threads": "20",
      "Base Frequency": "3.5 GHz",
      "Boost Frequency": "5.1 GHz",
      "TDP": "125W",
      "Socket": "LGA1700",
    }
  }
];

const GPUs = [
  {
		imageURL: "/computer_parts_1.png",
    name: "NVIDIA GeForce RTX 4090",
    properties: {
      "Memory": "24GB GDDR6X",
      "Base Clock": "2.23 GHz",
      "Boost Clock": "2.52 GHz",
      "CUDA Cores": "16384",
      "TDP": "450W"
    }
  },
  {
		imageURL: "/computer_parts_1.png",
    name: "AMD Radeon RX 7900 XTX",
    properties: {
      "Memory": "48GB GDDR6",
      "Base Clock": "1.9 GHz",
      "Boost Clock": "2.5 GHz",
      "Stream Processors": "6144",
      "TDP": "355W"
    }
  },
  {
		imageURL: "/computer_parts_1.png",
    name: "NVIDIA GeForce RTX 4070 Ti",
    properties: {
      "Memory": "12GB GDDR6X",
      "Base Clock": "2.31 GHz",
      "Boost Clock": "2.61 GHz",
      "CUDA Cores": "7680",
      "TDP": "285W"
    }
  }
];

const Motherboards = [
  {
		imageURL: "/computer_parts_3.png",
    name: "ASUS ROG Strix Z790-E Gaming",
    properties: {
      "Form Factor": "ATX",
      "Socket": "LGA1700",
      "Chipset": "Intel Z790",
      "Memory Support": "DDR5 7200 MHz",
      "PCIe Slots": "2 x PCIe 5.0 x16"
    }
  },
  {
		imageURL: "/computer_parts_3.png",
    name: "MSI MAG B650 Tomahawk WiFi",
    properties: {
      "Form Factor": "ATX",
      "Socket": "AM5",
      "Chipset": "AMD B650",
      "Memory Support": "DDR5 6600 MHz",
      "PCIe Slots": "1 x PCIe 5.0 x16"
    }
  },
  {
		imageURL: "/computer_parts_3.png",
    name: "Gigabyte B550 AORUS Elite",
    properties: {
      "Form Factor": "ATX",
      "Socket": "AM4",
      "Chipset": "AMD B550",
      "Memory Support": "DDR4 4733 MHz",
      "PCIe Slots": "1 x PCIe 4.0 x16"
    }
  }
];

const HardDrives = [
  {
		imageURL: "/computer_parts_2.png",
    name: "Samsung 980 PRO 1TB NVMe SSD",
    properties: {
      "Type": "NVMe SSD",
      "Capacity": "1TB",
      "Interface": "PCIe 4.0",
      "Read Speed": "7000 MB/s",
      "Write Speed": "5000 MB/s"
    }
  },
  {
		imageURL: "/computer_parts_2.png",
    name: "Western Digital Black 2TB HDD",
    properties: {
      "Type": "HDD",
      "Capacity": "2TB",
      "Interface": "SATA III",
      "RPM": "7200",
      "Cache": "256MB",
      "Read Speed": "500 MB/s",
      "Write Speed": "520 MB/s"
    }
  },
  {
		imageURL: "/computer_parts_2.png",
    name: "Crucial MX500 1TB SSD",
    properties: {
      "Type": "SATA SSD",
      "Capacity": "1TB",
      "Interface": "SATA III",
      "Read Speed": "560 MB/s",
      "Write Speed": "510 MB/s"
    }
  }
];

const ALLProducts = [...CPUs, ...GPUs, ...Motherboards, ...HardDrives];

const ProductCard = ({ product, handleNext }) => {
  return (
    <div className="card mb-4 align-items-center" style={{ maxWidth: "400px" }}>
      {product.imageURL && (
        <img
          src={product.imageURL}
          className="card-img-top"
					style={{ width: "100px" }}
          alt={product.name}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <ul className="list-group list-group-flush">
          {Object.entries(product.properties).map(([key, value]) => (
            <li
              key={key}
              className="list-group-item d-flex justify-content-between"
            >
              <strong>{key}</strong>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <button onClick={handleNext} className="btn btn-primary w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

const ProductContainer = () => {
	const [query, setQuery] = useState("");
	const [productsShown, setProductsShown] = useState(ALLProducts);
	const [productKind, setProductKind] = useState("");
	const [filters, setFilters] = useState({});

	const onSearch = (e) => {
		e.preventDefault();

		if (query.toLowerCase() === "all") {
			setProductsShown(ALLProducts);
		} else {
			setProductsShown(ALLProducts.filter((product) => product.name.includes(query)));
		}
		setQuery("");
	};

	const onSelectProductCategory = (e) => {
		const kind = e.target.value;
		setProductKind(kind);

		if (kind === "cpu") {
			setProductsShown(CPUs);
		} else if (kind == "gpu") {
			setProductsShown(GPUs);
		} else if (kind == "mbs") {
      setProductsShown(Motherboards);
		} else if (kind == "hdd") {
      setProductsShown(HardDrives);
		} else {
			e.target.value = "";
      setProductsShown(ALLProducts);
		}
	}; 

	const onSelectProductProperties = (e) => {
		const pp_name = e.target.id.split("-")[1];
		const pp_value = e.target.value;
		setFilters({...filters, [pp_name]: pp_value});	
	}; 

	useEffect(() => {
		if (productKind === "cpu") {
			setProductsShown(
					CPUs.filter((product) => 
							Object.entries(filters).every(([key, value]) => value === "" || value === product.properties[key])));
		}
		if (productKind === "gpu") {
			setProductsShown(
					GPUs.filter((product) => 
							Object.entries(filters).every(([key, value]) => value === "" || value === product.properties[key])));
		}
		if (productKind === "mbs") {
			setProductsShown(
					MotherBoards.filter((product) => 
							Object.entries(filters).every(([key, value]) => value === "" || value === product.properties[key])));
		}
		if (productKind === "hdd") {
			setProductsShown(
					HardDrives.filter((product) => 
							Object.entries(filters).every(([key, value]) => value === "" || value === product.properties[key])));
		}
	}, [filters]);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

	return (
		<div className="container">
			{ /* Show a stepper */ }
			<Box sx={{ width: '100%' }}>
				<Stepper activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};
						if (isStepOptional(index)) {
							labelProps.optional = (
								<Typography variant="caption">Optional</Typography>
							);
						}
						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				{activeStep === steps.length ? (
					<React.Fragment>
						<Typography sx={{ mt: 2, mb: 1 }}>
							All steps completed - you&apos;re finished
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleReset}>Reset</Button>
						</Box>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
	{ /*
							<Button
								color="inherit"
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}
							>
								Back
							</Button>
	*/ }
							<Box sx={{ flex: '1 1 auto' }} />
							{isStepOptional(activeStep) && (
								<Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
									Skip
								</Button>
							)}
	{ /*
							<Button onClick={handleNext}>
								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
							</Button>
	*/ }
						</Box>
					</React.Fragment>
				)}
			</Box>
			
{ activeStep === 0 && (
			<>
			<form onSubmit={onSearch} className="d-flex mt-3 mb-3">
				<input
					type="search"
					className="form-control me-4"
					placeholder="Search product by name or type 'all' to see all products..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="btn btn-primary" type="submit">
					Search
				</button>
			</form>

			<select className="form-select mb-3 mt-3" defaultValue="" onChange={onSelectProductCategory}>
				<option value=""> Product Categories </option>
				<option value="cpu"> CPUs </option>
				<option value="gpu"> GPUs </option>
				<option value="mbs"> Motherboards </option>
				<option value="hdd"> Hard Drives </option>
			</select>
			
			{ productKind !== "" && productKind !== "all" && (
						<span className="text-decoration-underline"> Advanced search: </span>
				)
			}

			{ productKind === "cpu" && (
						Object.keys(CPUs[0].properties).map((k, nndx) => (
							<select className="form-select mb-3 mt-3" id={`${productKind}-${k}`} key={nndx} defaultValue="" onChange={onSelectProductProperties}>
								<option value=""> {k} </option>
								{ [...new Set(CPUs.map((cpu) => cpu.properties[k]))].map((pp, ndx) => (
										<option key={ndx} value={pp}> {pp} </option>
									))
								}
							</select>
						))
				)
			}

			{ productKind === "gpu" && (
						Object.keys(GPUs[0].properties).map((k, nndx) => (
							<select className="form-select mb-3 mt-3" id={`${productKind}-${k}`} key={nndx} defaultValue="" onChange={onSelectProductProperties}>
								<option value=""> {k} </option>
								{ [...new Set(GPUs.map((gpu) => gpu.properties[k]))].map((pp, ndx) => (
										<option key={ndx} value={pp}> {pp} </option>
									))
								}
							</select>
						))
				)
			}

			{ productKind === "mbs" && (
						Object.keys(Motherboards[0].properties).map((k, nndx) => (
							<select className="form-select mb-3 mt-3" id={`${productKind}-${k}`} key={nndx} defaultValue="" onChange={onSelectProductProperties}>
								<option value=""> {k} </option>
								{ [...new Set(Motherboards.map((mb) => mb.properties[k]))].map((pp, ndx) => (
										<option key={ndx} value={pp}> {pp} </option>
									))
								}
							</select>
						))
				)
			}

			{ productKind === "hdd" && (
						Object.keys(HardDrives[0].properties).map((k, nndx) => (
							<select className="form-select mb-3 mt-3" id={`${productKind}-${k}`} key={nndx} defaultValue="" onChange={onSelectProductProperties}>
								<option value=""> {k} </option>
								{ [...new Set(HardDrives.map((hdd) => hdd.properties[k]))].map((pp, ndx) => (
										<option key={ndx} value={pp}> {pp} </option>
									))
								}
							</select>
						))
				)
			}

			<div className="d-flex flex-wrap gap-3 justify-content-between">
				{productsShown.map((product, i) => <ProductCard key={i} product={product} handleNext={handleNext} />)}
			</div>
			</>
)}

{ activeStep === 1 && (
		<>
		<h2> Enter Payment information </h2>
		</>
)}
		</div>
	);
};

export default function Home() {
	return (
		<>
			<ProductContainer />
		</>
	);
}
