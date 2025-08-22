// src/app/dashboard/add-product/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(true);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      description,
      price: parseFloat(price),
    };

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        setSuccessMessage("Product added successfully!");
        setIsFormVisible(false);
        setName("");
        setDescription("");
        setPrice("");

        setTimeout(() => {
          router.push("/products");
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error("Failed to add product:", response.status, errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      {isFormVisible ? (
        <>
          <div className="">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Add New Product
            </h1>
                      </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg relative"
          >
            <div
              onClick={() => setIsFormVisible(false)}
              className="absolute right-2 top-2 w-8 h-8 rounded-full flex items-center justify-center text-xs bg-red-500 p-2 text-white cursor-pointer"
            >
              close
            </div>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-semibold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-800"
                rows="4"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-semibold mb-2"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-800"
                step="0.01"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring focus:ring-green-300"
            >
              Add Product
            </button>
          </form>
        </>
      ) : (
        <div className="max-w-md mx-auto text-center bg-green-100 p-10 rounded-lg shadow-lg border border-green-400 z-500">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Success! 🎉
          </h2>
          <p className="text-lg text-green-600">{successMessage}</p>
        </div>
      )}
    </div>
  );
}
