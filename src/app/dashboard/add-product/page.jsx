// src/app/dashboard/add-product/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast'; // Import toast for notifications

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state for button feedback
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    const newProduct = {
      name,
      description,
      price: parseFloat(price),
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result.message || "Product added successfully!"); // Display success toast
        
        // Clear form fields
        setName("");
        setDescription("");
        setPrice("");

        // Optionally redirect after a short delay
        setTimeout(() => {
          router.push("/products");
        }, 2000); // Redirect after 2 seconds
        
      } else {
        const errorData = await response.json();
        console.error("Failed to add product:", response.status, errorData);
        toast.error(errorData.message || "Failed to add product."); // Display error toast
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An unexpected error occurred."); // Display generic error toast
    } finally {
      setLoading(false); // Set loading back to false
    }
  };

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-180px)] bg-gray-900 text-white flex justify-center items-center">
      <div className="bg-gray-800 p-10 rounded-xl shadow-2xl max-w-lg w-full border border-blue-600">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-400">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Removed the close button and related visibility logic */}

          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading} // Disable input while loading
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              disabled={loading} // Disable input while loading
            ></textarea>
          </div>
          <div>
            <label htmlFor="price" className="block text-lg font-medium text-gray-300 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              step="0.01"
              min="0"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              disabled={loading} // Disable input while loading
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Adding Product...' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
}