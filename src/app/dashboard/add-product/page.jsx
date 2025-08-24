// src/app/dashboard/add-product/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // New state for image URL
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newProduct = {
      name,
      description,
      price: parseFloat(price),
      imageUrl, // Include the image URL in the product data
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
        toast.success(result.message || "Product added successfully!");

        // Clear form fields
        setName("");
        setDescription("");
        setPrice("");
        setImageUrl(""); // Clear image URL field
        
        setTimeout(() => {
          router.push("/products");
        }, 2000);

      } else {
        const errorData = await response.json();
        console.error("Failed to add product:", response.status, errorData);
        toast.error(errorData.message || "Failed to add product.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-180px)] bg-gray-900 text-white flex justify-center items-center">
      <div className="bg-gray-800 p-10 rounded-xl shadow-2xl max-w-lg w-full border border-blue-600">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-400">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
          {/* New field for Product Image URL */}
          <div>
            <label htmlFor="imageUrl" className="block text-lg font-medium text-gray-300 mb-2">
              Product Image URL (Optional)
            </label>
            <input
              type="text"
              id="imageUrl"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              disabled={loading}
              placeholder="e.g., [https://example.com/product-image.jpg](https://example.com/product-image.jpg)"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <ClipLoader color="#ffffff" size={20} />
            ) : (
              'Add Product'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}