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
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="bg-gray-800 border border-blue-600 text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className=" mb-4 flex-grow">{product.description}</p>
              <p className="font-bold text-xl mb-4">${product.price}</p>
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