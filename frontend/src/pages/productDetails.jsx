/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/nav";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export default function ProductDetails() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8000/api/v2/product/product/${id}`
				);
				setProduct(response.data.product);
				setLoading(false);
			} catch (err) {
				setError(err);
				setLoading(false);
			}
		};
		fetchProduct();
	}, [id]);

	const handleIncrement = () => setQuantity((prev) => prev + 1);
	const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen bg-gray-900 text-white">
				Loading...
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen bg-gray-900 text-red-400">
				Error: {error.message}
			</div>
		);
	}

	if (!product) {
		return (
			<div className="flex justify-center items-center h-screen bg-gray-900 text-gray-400">
				No product found.
			</div>
		);
	}

	return (
		<>
			<Nav />
			<div className="min-h-screen bg-gray-900 text-white p-6">
				<div className="max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden">
					<div className="flex flex-col md:flex-row">
						{/* Image Section */}
						<div className="md:w-1/3 bg-gray-700 p-4 flex justify-center items-center">
							{product.images && product.images.length > 0 ? (
								<img
									src={`http://localhost:8000${product.images[0]}`}
									alt={product.name}
									className="w-full object-contain rounded-lg shadow-md"
									style={{ maxHeight: "400px" }}
								/>
							) : (
								<div className="w-full h-64 bg-gray-600 flex items-center justify-center text-gray-300">
									No Image Available
								</div>
							)}
						</div>

						{/* Information Section */}
						<div className="md:w-2/3 p-6">
							<h1 className="text-3xl font-bold mb-4 text-blue-300">
								{product.name}
							</h1>

							<p className="text-gray-300 mb-4">{product.description}</p>

							<div className="flex flex-wrap gap-6 my-4">
								<div>
									<h2 className="text-lg font-semibold text-gray-200">Category</h2>
									<p className="text-gray-400">{product.category}</p>
								</div>

								{product.tags && product.tags.length > 0 && (
									<div>
										<h2 className="text-lg font-semibold text-gray-200">Tags</h2>
										<div className="flex flex-wrap mt-1">
											{product.tags.map((tag, index) => (
												<span
													key={index}
													className="bg-blue-500 text-white text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								)}
							</div>

							{/* Price & Quantity Section */}
							<div className="flex flex-wrap gap-6 items-center my-5">
								<div>
									<h2 className="text-lg font-semibold text-gray-200">Price</h2>
									<p className="text-xl font-bold text-green-400">${product.price}</p>
								</div>

								{/* Quantity Selector */}
								<div>
									<h2 className="text-lg font-semibold text-gray-200">Quantity</h2>
									<div className="flex items-center bg-gray-700 p-2 rounded-lg">
										<button
											onClick={handleDecrement}
											className="p-3 bg-gray-600 hover:bg-gray-500 rounded-l-lg transition-all"
										>
											<IoIosRemove className="text-white text-xl" />
										</button>
										<div className="px-6 py-2 bg-gray-800 text-white text-lg font-semibold">
											{quantity}
										</div>
										<button
											onClick={handleIncrement}
											className="p-3 bg-gray-600 hover:bg-gray-500 rounded-r-lg transition-all"
										>
											<IoIosAdd className="text-white text-xl" />
										</button>
									</div>
								</div>
							</div>

							{/* Add to Cart Button */}
							<button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all">
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
