"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState, useEffect } from "react";

import { NavBar } from "../page.js";

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Pick item', 'Enter payment details', 'Enter shipping information', 'Checkout'];

function OrderSurvey() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRating(0);
    setFeedback("");
		setShowSuccessMessage(true);
		setTimeout(() => {
			window.location.href = "/pcbuilder";
		}, 3000);
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <h5>We value your feedback!</h5>

      <div className="mb-3">
        <label className="form-label">How satisfied are you with your order?</label>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              className={`btn btn-sm ${star <= rating ? "btn-warning" : "btn-outline-secondary"} me-1`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Additional Comments (optional)</label>
        <textarea
          className="form-control"
          rows="3"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Tell us what you think..."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Feedback
      </button>

		{ showSuccessMessage && (
			<div className="alert alert-info text-center mt-4" role="alert">
				<h4 className="alert-heading">Thank you for your valuable feedback</h4>
				<p>We will try to work on it in the future!</p>
				<hr />
				<p className="mb-0">You will be redirected to the home page soon!</p>
			</div>
			)
		}
    </form>
  );
}


const ShippingForm = ({handleNext}) => {
  const [formData, setFormData] = useState({
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shipping information submitted:", formData);
    // You would send this data to your backend here
  };

  return (
    <form className="p-4 bg-light rounded" onSubmit={handleNext}>
      <h4 className="mb-3">Shipping Information</h4>

      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address Line 1</label>
        <input
          type="text"
          className="form-control"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          placeholder="123 Main St"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address Line 2 (optional)</label>
        <input
          type="text"
          className="form-control"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          placeholder="Apartment, suite, etc."
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">State / Province</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Postal Code</label>
          <input
            type="text"
            className="form-control"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Country</label>
        <input
          type="text"
          className="form-control"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="United States"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Submit Shipping Info
      </button>
    </form>
  );
}

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
					Motherboards.filter((product) => 
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

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

	return (
		<div className="container">
			{ /* Show a stepper */ }
			<div className="mt-5"></div>
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
		    <form className="p-4 bg-light rounded" onSubmit={handleNext}>
      <h4 className="mb-3">Payment Information</h4>

      <div className="mb-3">
        <label className="form-label">Cardholder Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Card Number</label>
        <input
          type="text"
          className="form-control"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="1234 5678 9012 3456"
          required
          pattern="\d{13,19}"
          title="Enter a valid card number"
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Expiry Date</label>
          <input
            type="text"
            className="form-control"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            placeholder="MM/YY"
            required
            pattern="(0[1-9]|1[0-2])\/\d{2}"
            title="Format: MM/YY"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">CVV</label>
          <input
            type="text"
            className="form-control"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123"
            required
            pattern="\d{3,4}"
            title="3 or 4 digit CVV"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Submit Payment
      </button>
    </form></>
)}

{ activeStep === 2 && (
	<>
		<ShippingForm handleNext={handleNext} />
	</>
)}

{ activeStep === 3 && (
	<>
    <div className="alert alert-success text-center mt-4" role="alert">
      <h4 className="alert-heading">🎉 Thank you for your order!</h4>
      <p>Your order is on its way and will be delivered soon.</p>
      <hr />
      <p className="mb-0">You will receive a confirmation email with the tracking details shortly.</p>
    </div>

		<OrderSurvey />
	</>
)}

		</div>
	);
};

export default function Home() {
	return (
		<>
			<NavBar />
			<ProductContainer />
		</>
	);
}
