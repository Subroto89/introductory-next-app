import { notFound } from 'next/navigation';
import { products } from '@/lib/products';

export default function ProductDetailsPage({ params }) {
  // Find the product that matches the ID from the URL
  const product = products.find((p) => p._id === params._id);

  // If no product is found, show the Next.js not-found page
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-8 text-gray-700">
      <div className="bg-white rounded-lg shadow-lg p-8 text-gray-700">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-gray-800 font-bold text-2xl">${product.price}</p>
      </div>
    </div>
  );
}