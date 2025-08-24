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
    // Outer container now matches the ProductDetailsPage's background and minimum height
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">Our Products</h1> {/* Heading color adjusted */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            // Individual product card now matches the inner styling of ProductDetailsPage
            <div key={product._id} className="bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300 border border-blue-600">
              {/* Product Image (included from previous update) */}
              <img
                src={product.imageUrl || `https://placehold.co/400x300/a0aec0/ffffff?text=No Image`}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4 shadow-sm"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/a0aec0/ffffff?text=Image Error"; }}
              />
              <h2 className="text-2xl font-semibold mb-2 text-blue-300">{product.name}</h2> {/* Text color adjusted */}
              <p className="text-gray-400 mb-4 flex-grow">{product.description}</p> {/* Text color adjusted */}
              <p className="text-blue-200 font-bold text-xl mb-4">${product.price}</p> {/* Text color adjusted */}
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
