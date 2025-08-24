// import { notFound } from 'next/navigation';
// import { products } from '@/lib/products';

// export default function ProductDetailsPage({ params }) {
//   // Find the product that matches the ID from the URL
//   const product = products.find((p) => p._id === params._id);

//   // If no product is found, show the Next.js not-found page
//   if (!product) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto p-8 text-gray-700">
//       <div className="bg-white rounded-lg shadow-lg p-8 text-gray-700">
//         <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//         <p className="text-gray-600 mb-4">{product.description}</p>
//         <p className="text-gray-800 font-bold text-2xl">${product.price}</p>
//       </div>
//     </div>
//   );
// }

// src/app/products/page.jsx
import Link from 'next/link';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }

  return res.json();
}

export default async function ProductsPage() {
  let products = [];
  try {
    products = await getProducts();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300">
              {/* Product Image */}
              <img
                src={product.imageUrl || `https://placehold.co/400x300/a0aec0/ffffff?text=No Image`} // Placeholder if no image
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4 shadow-sm"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/a0aec0/ffffff?text=Image Error"; }} // Fallback for broken images
              />
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">{product.name}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
              <p className="text-gray-800 font-bold text-xl mb-4">${product.price}</p>
              <Link href={`/products/${product._id}`} className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
                Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
}
