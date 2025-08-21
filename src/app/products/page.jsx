// src/app/products/page.jsx
import Link from 'next/link';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
            <p className="text-gray-800 font-bold text-xl mb-4">${product.price}</p>
            <Link href={`/products/${product.id}`} className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}